#!/usr/bin/env python3
"""Import Wikiwijs lesson material (such as the Stercollecties) as attributed Markdown.

    python3 tools/wikiwijs.py section ID "Heading" > out.nl.md    one section of arrangement ID
    python3 tools/wikiwijs.py doc ID FILE_URL > out.nl.md         a Word 97-2003 file attached to arrangement ID
    python3 tools/wikiwijs.py selftest

A heading may be a path ("Explain > Activiteit 3") when it isn't unique.
The text is left unchanged; only the layout becomes Markdown. Images are not
copied, because Wikiwijs uses them under fair use rather than the content
licence; a marker shows where each one was (drawings next to headings are
decoration and get none). Needs pandoc, and macOS textutil for Word files.
"""
import base64
import datetime
import html
import json
import re
import struct
import subprocess
import sys
import tempfile
import urllib.parse
import urllib.request

EXPORT = "https://export.wikiwijs.nl/asset/arrangement/{}.json"
SUB = dict(zip("0123456789+-−()=", "₀₁₂₃₄₅₆₇₈₉₊₋₋₍₎₌"))
SUP = dict(zip("0123456789+-−()=", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁻⁽⁾⁼"))
PLAIN = str.maketrans({v: k for table in (SUB, SUP) for k, v in table.items()})
SYMBOLS = {
    "rightarrow": "→", "to": "→", "longrightarrow": "→", "leftarrow": "←",
    "rightleftharpoons": "⇄", "rightleftarrows": "⇄", "leftrightarrows": "⇄",
    "leftrightarrow": "↔", "cdot": "·", "times": "×", "pm": "±", "Delta": "Δ",
    "rho": "ρ", "%": "%", ",": " ", ";": " ", " ": " ",
}
IGNORED = {"small", "large", "normalsize", "displaystyle", "textstyle", "text", "mathrm", "textrm", "rm"}


def script(text, table, tag):
    if text and all(c in table for c in text):
        return "".join(table[c] for c in text)
    return f"<{tag}>{text}</{tag}>"


def latex_to_text(tex):
    """\\small{N}{{H}_{{{4}}}^{{+}}} -> NH₄⁺. Anything harder is kept as $…$ for GitHub to render."""
    tokens = re.findall(r"\\[A-Za-z]+|\\.|[{}^_]|[^\\{}^_]", tex)
    pos = 0

    def atom():
        nonlocal pos
        tok = tokens[pos]
        pos += 1
        if tok == "{":
            out = seq("}")
            pos += 1
            return out
        if tok.startswith("\\"):
            if tok[1:] in SYMBOLS:
                return SYMBOLS[tok[1:]]
            if tok[1:] in IGNORED:
                return ""
            raise ValueError(tok)
        if tok in "}^_":
            raise ValueError(tok)
        return tok

    def seq(stop=None):
        nonlocal pos
        out = ""
        while pos < len(tokens) and tokens[pos] != stop:
            if tokens[pos] in "^_":
                hat = tokens[pos] == "^"
                pos += 1
                out += script(atom(), SUP if hat else SUB, "sup" if hat else "sub")
            else:
                out += atom()
        return out

    try:
        text = seq()
        if pos == len(tokens) and text.strip():
            return text
    except (ValueError, IndexError):
        pass
    return "$" + re.sub(r"^\\small\s*", "", tex) + "$"


def formula(match):
    return latex_to_text(base64.b64decode(urllib.parse.unquote(match.group(1))).decode())


def lettered(match):
    start = int(match.group(2) or 1)
    items = re.findall(r"<li[^>]*>(.*?)</li>", match.group(3), re.S)
    letters = "abcdefghijklmnopqrstuvwxyz" if match.group(1) == "a" else "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return "".join(f"<p>{letters[start - 1 + k]}. {item}</p>" for k, item in enumerate(items))


def pandoc(fragment):
    md = subprocess.run(["pandoc", "-f", "html", "-t", "gfm", "--wrap=none"],
                        input=fragment, capture_output=True, text=True, check=True).stdout
    md = re.sub(r"<(sub|sup)>([^<]*)</\1>", lambda m: script(m.group(2), SUB if m.group(1) == "sub" else SUP, m.group(1)), md)
    md = re.sub(r"[ \t]+\n", "\n", md.replace("\u00a0", " "))
    md = re.sub(r"\\\n(?=\n|$)", "\n", md)
    return re.sub(r"\n{3,}", "\n\n", md).strip() + "\n"


def html_to_md(fragment):
    fragment = re.sub(r'<img[^>]*?src="[^"]*?convert\.svg\?formula=([^"&]+)[^"]*"[^>]*>', formula, fragment)
    fragment = re.sub(r"<img[^>]*>", "<em>[image not copied]</em>", fragment)
    fragment = re.sub(r'<video[^>]*?src="([^"]+)"[^>]*>(?:</video>)?',
                      r'<em>[video not copied: <a href="\1">\1</a>]</em>', fragment)
    fragment = re.sub(r'<ol(?=[^>]*type="([aA])")(?:[^>]*start="(\d+)")?[^>]*>(.*?)</ol>', lettered, fragment, flags=re.S)
    fragment = re.sub(r"(?:<br\s*/?>\s*){2,}", "</p><p>", fragment)
    return pandoc(re.sub(r"</?(?:span|div)[^>]*>", "", fragment))


def word_text(data):
    """Main text of a Word 97-2003 file from its piece table, keeping picture (\\x01) and drawing (\\x08) marks."""
    u16 = lambda b, o: struct.unpack_from("<H", b, o)[0]
    u32 = lambda b, o: struct.unpack_from("<I", b, o)[0]
    assert data[:8] == bytes.fromhex("d0cf11e0a1b11ae1"), "not a Word 97-2003 file"
    assert u32(data, 0x48) == 0, "files over 7 MB (extra DIFAT sectors) aren't supported"
    ss, ms = 1 << u16(data, 0x1E), 1 << u16(data, 0x20)
    sector = lambda i: data[512 + i * ss:512 + (i + 1) * ss]
    fat = [u32(sector(u32(data, 0x4C + 4 * i)), 4 * j) for i in range(u32(data, 0x2C)) for j in range(ss // 4)]

    def chain(start, table, get):
        out = []
        while start < 0xFFFFFFFA:
            out.append(get(start))
            start = table[start]
        return b"".join(out)

    dirs = chain(u32(data, 0x30), fat, sector)
    entries = {}
    for o in range(0, len(dirs), 128):
        e = dirs[o:o + 128]
        entries.setdefault(e[:u16(e, 0x40)].decode("utf-16-le").rstrip("\x00"), (u32(e, 0x74), u32(e, 0x78)))
    mini = chain(entries["Root Entry"][0], fat, sector)
    raw = chain(u32(data, 0x3C), fat, sector) if u32(data, 0x40) else b""
    minifat = [u32(raw, 4 * j) for j in range(len(raw) // 4)]

    def stream(name):
        start, size = entries[name]
        if size < u32(data, 0x38):
            return chain(start, minifat, lambda i: mini[i * ms:(i + 1) * ms])[:size]
        return chain(start, fat, sector)[:size]

    wd = stream("WordDocument")
    assert u16(wd, 0) == 0xA5EC, "WordDocument stream has no Word 97 header"
    table = stream("1Table" if u16(wd, 0x0A) & 0x0200 else "0Table")
    clx = table[u32(wd, 0x1A2):u32(wd, 0x1A2) + u32(wd, 0x1A6)]
    i = 0
    while clx[i] == 1:
        i += 3 + u16(clx, i + 1)
    lcb = u32(clx, i + 1)
    plc, n = clx[i + 5:i + 5 + lcb], (lcb - 4) // 12
    parts = []
    for k in range(n):
        cp0, cp1, fc = u32(plc, 4 * k), u32(plc, 4 * k + 4), u32(plc, 4 * (n + 1) + 8 * k + 2)
        if fc & 0x40000000:
            off = (fc & 0x3FFFFFFF) // 2
            parts.append(wd[off:off + cp1 - cp0].decode("cp1252", "replace"))
        else:
            parts.append(wd[fc:fc + 2 * (cp1 - cp0)].decode("utf-16-le", "replace"))
    return "".join(parts)[:u32(wd, 0x4C)]


def norm(s):
    return re.sub(r"[\W_]+", "", s.translate(PLAIN).lower())


def mark_pictures(md, text):
    """Add a marker to the Markdown wherever the Word text has a picture or drawing."""
    text = re.sub(r"\x13\s*(?:EMBED|INCLUDEPICTURE)[^\x15]*\x15", "", text)
    text = re.sub(r"\x13[^\x13\x14\x15]*\x14?|\x15", "", text)
    lines, pos, prev, lost = md.split("\n"), 0, "", 0
    for para in re.split("[\r\x07]", text):
        segments = [norm(s) for s in para.split("\x0b") if norm(s)]
        count, key = para.count("\x01") + para.count("\x08"), segments[-1][-40:] if segments else ""
        if count and (key or prev):
            hit = next((j for j in range(pos, len(lines)) if (key or prev) in norm(re.sub(r"<[^>]+>", "", lines[j]))), None)
            if hit is None:
                lost += count
            elif not lines[hit].startswith("#"):
                pos = hit
                kind = "image" if "\x01" in para else "drawing"
                note = f"[{count} {kind}s not copied]" if count > 1 else f"[{kind} not copied]"
                if lines[hit].startswith("<"):
                    lines[hit] += f"<em>{note}</em>" if key else f"\n<p><em>{note}</em></p>"
                elif key:
                    lines[hit] += f" *{note}*"
                else:
                    end = next((j for j in range(hit, len(lines)) if not lines[j].strip()), len(lines))
                    lines[end:end] = ["", f"*{note}*"]
        if key:
            prev = key
    if lost:
        print(f"warning: {lost} pictures couldn't be placed", file=sys.stderr)
        lines += ["", f"*[{lost} more pictures not copied; their place couldn't be found]*"]
    return "\n".join(lines)


def word_to_md(path):
    h = subprocess.run(["textutil", "-convert", "html", "-stdout", path],
                       capture_output=True, check=True).stdout.decode("utf-8", "replace")
    body = re.search(r"<body[^>]*>(.*)</body>", h, re.S).group(1).replace("\x00", "")
    body = re.sub(r"</?span[^>]*>", "", body)
    body = re.sub(r"<(?!a\b)(\w+)\s[^>]*>", r"<\1>", body)
    body = re.sub(r"<(b|i)>\s*</\1>", "", body)
    body = re.sub(r"<p>\s*(<br>)?\s*</p>", "", body)
    body = re.sub(r"EMBED Equation\.\d+", "<em>[equation not copied]</em>", body)
    body = re.sub(r'INCLUDEPICTURE\s+(?:"|&quot;).*?(?:"|&quot;)(?:\s+\\\*\s+MERGEFORMAT(?:INET)?)?', "<em>[image not copied]</em>", body)
    body = re.sub(r'HYPERLINK\s+(?:"|&quot;).*?(?:"|&quot;)(?:\s+\\[a-z]\s+(?:"|&quot;).*?(?:"|&quot;))*', "", body)
    body = re.sub(r"\bPAGE\s+\\\*?\s*MERGEFORMAT\d*", "", body)
    cell = r"((?:(?!</?t[dr]>|</?table>).)*)"
    body = re.sub(rf"<table>\s*<tbody>\s*<tr>\s*<td>{cell}</td>\s*</tr>\s*</tbody>\s*</table>",
                  r"<blockquote>\1</blockquote>", body, flags=re.S)
    lines = html_to_md(body).split("\n")
    for i, line in enumerate(lines):
        m = re.fullmatch(r"\*\*([^*]+?)\*\*", line.strip())
        if not m:
            continue
        num = re.match(r"(\d+(?:\.\d+)+)\s", m.group(1))
        if num:
            lines[i] = "#" * (1 + num.group(1).count(".")) + " " + m.group(1).strip()
        elif not "".join(lines[:i]).strip():
            lines[i] = "# " + m.group(1).strip()
    return mark_pictures("\n".join(lines), word_text(open(path, "rb").read()))


def walk(sections, path=()):
    for sec in sections:
        p = path + (sec["heading"]["content"].strip(),)
        yield p, sec
        yield from walk(sec.get("sections", []), p)


def section_to_md(sec, level=2):
    out = [f"{'#' * level} {sec['heading']['content'].strip()}\n"]
    for it in sec.get("items", []):
        if it["type"] == "paragraph":
            out.append(html_to_md(it["content"]))
        elif it["type"] == "file":
            out.append(f"*[file not copied: <{it['file']}>]*\n")
        else:
            out.append(f"*[{it['type']} not copied]*\n")
    for sub in sec.get("sections", []):
        out.append(section_to_md(sub, level + 1))
    return "\n".join(out)


def header(arr, part, file_url=None):
    lic = arr["metadata"]["license"]
    slug = re.sub(r"^cc-|-\d+$", "", lic["identifier"])
    if "nd" in slug.split("-"):
        sys.exit(f"{lic['identifier']} doesn't allow adaptations, so this can't be translated")
    mismatch = "" if f"/licenses/{slug}/" in lic["link"] else \
        f"; Wikiwijs links it to <{lic['link']}>, which is a different licence, so follow the stricter terms"
    title = " ".join(arr["title"].split())
    src = f" ([original file]({file_url}))" if file_url else ""
    numbering = " Word's automatic list numbers are lost in the conversion." if file_url else ""
    return (f"> **Source:** {arr['publisher']['name']} ({arr['team']['name']}), [{title}]({arr['metadata']['webAddress']}) "
            f"on Wikiwijs, {part}{src}. Retrieved {datetime.date.today():%-d %B %Y}.\n"
            f"> **Licence:** {lic['name']} (`{lic['identifier']}`{mismatch}).\n"
            "> The text is unchanged; only the layout was converted to Markdown. Images are not copied "
            f"(Wikiwijs uses them under fair use, outside the licence).{numbering} "
            "Notes in *[italic square brackets]* are editorial.\n\n")


def fetch(url):
    with urllib.request.urlopen(url, timeout=60) as r:
        return r.read()


def find_section(arr, heading):
    want = tuple(h.strip() for h in heading.split(">"))
    hits = [(p, s) for p, s in walk(arr["sections"]) if p[-len(want):] == want]
    if len(hits) != 1:
        sys.exit(f"{len(hits)} sections match {heading!r}: " + "; ".join(" > ".join(p) for p, _ in hits))
    return hits[0]


def find_attachment(arr, url):
    for p, sec in walk(arr["sections"]):
        for it in sec.get("items", []):
            if it.get("file") == url:
                return p, url.rsplit("/", 1)[-1]
            for m in re.finditer(r'href="([^"]+)"[^>]*>(.*?)</a>', it.get("content") or "", re.S):
                if html.unescape(m.group(1)) == url:
                    return p, " ".join(re.sub(r"<[^>]+>", "", html.unescape(m.group(2))).split())
    sys.exit(f"{url} isn't attached to arrangement {arr['identifier']}")


def selftest():
    assert latex_to_text(r"\small{N}{{H}_{{{4}}}^{{+}}}") == "NH₄⁺"
    assert latex_to_text(r"\small{O}{{H}}^{{-}}") == "OH⁻"
    assert latex_to_text(r"\small{C}{O}_{2} \rightarrow x_{ab}") == "CO₂ → x<sub>ab</sub>"
    assert latex_to_text(r"\small\frac{a}{b}") == r"$\frac{a}{b}$"
    assert latex_to_text(r"{a") == "${a$"
    tex = urllib.parse.quote(base64.b64encode(rb"\small{O}_{2}").decode())
    md = html_to_md(f'<p>Gas <span class="math-tex"><img alt="Formule" src="https://export.wikiwijs.nl/convert.svg?formula={tex}"/></span> '
                    '<img src="x.png"/> 10<sup>-27</sup> kg, p<sub>o</sub></p>')
    assert md == "Gas O₂ *\\[image not copied\\]* 10⁻²⁷ kg, p<sub>o</sub>\n", md
    md = html_to_md('<ol start="1" type="a"><li>Eerste</li><li>Tweede</li></ol>')
    assert md.split("\n\n") == ["a\\. Eerste", "b\\. Tweede\n"], md
    md = "# Kop\n\nZie onderstaand schema:\n\nVolgende alinea met tekst\n\n<td><p>Volume massa</p>"
    text = "\x08Kop\rZie onderstaand\x0bschema:\x0b\r\x01\rVolgende alinea \x01met tekst\rVolume\x08\x08 massa\r"
    assert mark_pictures(md, text).split("\n") == [
        "# Kop", "", "Zie onderstaand schema:", "", "*[image not copied]*", "",
        "Volgende alinea met tekst *[image not copied]*", "",
        "<td><p>Volume massa</p><em>[2 drawings not copied]</em>"]
    arr = {"metadata": {"license": {"identifier": "cc-by-sa-40", "name": "CC BY-SA 4.0",
                                    "link": "http://creativecommons.org/licenses/by-nc-sa/4.0/"}, "webAddress": "W"},
           "publisher": {"name": "P"}, "team": {"name": "T"}, "title": "A  B"}
    assert "different licence" in header(arr, "x") and "[A B](W)" in header(arr, "x")
    arr["metadata"]["license"]["link"] = "http://creativecommons.org/licenses/by-sa/4.0/"
    assert "different licence" not in header(arr, "x")
    print("selftest ok")


def main(argv):
    if argv[1:] == ["selftest"]:
        return selftest()
    if len(argv) != 4 or argv[1] not in ("section", "doc"):
        sys.exit(__doc__)
    arr = json.loads(fetch(EXPORT.format(argv[2])))
    if argv[1] == "section":
        path, sec = find_section(arr, argv[3])
        body = section_to_md(sec)
        out = header(arr, "section “" + " > ".join(path[1:]) + "”") + body
    else:
        path, label = find_attachment(arr, argv[3])
        with tempfile.NamedTemporaryFile(suffix=".doc") as f:
            f.write(fetch(argv[3]))
            f.flush()
            body = word_to_md(f.name)
        out = header(arr, f"attachment “{label}” in section “{' > '.join(path[1:])}”", argv[3]) + body
    assert body.strip() and "convert.svg" not in out, "conversion left nothing or an unconverted formula"
    sys.stdout.write(out)


if __name__ == "__main__":
    main(sys.argv)
