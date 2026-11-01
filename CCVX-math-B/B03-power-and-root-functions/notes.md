# B3 — Power and root functions: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. Powers and their rules

- aⁿ is a *power* (*macht*) with base (*grondtal*) a and exponent (*exponent*) n; n is rational in this syllabus.
- Special exponents: a¹ = a; a⁰ = 1 for a ≠ 0; a⁻ⁿ = 1/aⁿ = (1/a)ⁿ for a ≠ 0 (so a⁻¹ = 1/a); a^(1/n) = ⁿ√a, the n-th root of a (n = 2, 3, 4, …); for even n both a ≥ 0 and ⁿ√a ≥ 0. In particular a^(1/2) = √a.
- Rational exponents mix both: a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ).
- The rules: aᵐ·aⁿ = aᵐ⁺ⁿ (add exponents on multiplication); aᵐ/aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; (a·b)ⁿ = aⁿbⁿ; (a/b)ⁿ = aⁿ/bⁿ.
- The classic trap: (a + b)² ≠ a² + b² — there is **no** sum rule for powers.
- Roots as powers make root algebra much easier: √x · ∛x = x^(1/2)·x^(1/3) = x^(5/6).

## 2. Power functions

- f(x) = xⁿ. For even n ≥ 2: y-axis symmetry, vertex (0,0) is a minimum, y → ∞ as x → ±∞. For odd n ≥ 3: point symmetry in (0,0), increasing through (0,0) with a horizontal tangent there.
- Negative exponent: f(x) = x⁻¹ = 1/x has vertical asymptote x = 0 and horizontal asymptote y = 0 (see [B08](../B08-function-investigation/)).
- Comparing growth: between two power functions, the one with the larger exponent eventually wins: x⁴ overtakes 100x² for x > 10.

## 3. Constant and linear functions

- f(x) = c is the constant function — a horizontal line (it is c·x⁰).
- f(x) = ax + b is linear (*eerstegraads*); the graph is the line y = ax + b with slope a and y-intercept b.

## 4. Quadratic functions

- f(x) = ax² + bx + c, a ≠ 0: a parabola (*parabool*), opening upwards (*dalparabool*) for a > 0 and downwards (*bergparabool*) for a < 0.
- Axis of symmetry (*symmetrieas*): x = −b/(2a); the vertex (*top*) lies on it and is a minimum (dalparabool) or maximum (bergparabool).
- The x-intercepts come from the quadratic formula; their number is set by D = b² − 4ac: two (D > 0), one touching (D = 0), none (D < 0).
- Completing the square (*kwadraat afsplitsen*) rewrites ax² + bx + c as a(x − p)² + q with (p, q) the vertex: x² + 6x + 5 = (x + 3)² − 9 + 5 = (x + 3)² − 4, vertex (−3, −4). This technique is needed again for circle equations in [B13](../B13-circle-geometry/).

## 5. Root functions

- f(x) = √x = x^(1/2): inverse of x² for x ≥ 0; domain x ≥ 0, range y ≥ 0; the graph is the upper half of the sideways parabola y² = x; it starts at (0,0) with a vertical tangent and is decreasingly increasing.
- f(x) = ∛x = x^(1/3): inverse of x³; domain and range **R**; point symmetry in (0,0).
- General shifted root functions like f(x) = 2 + √(x − 3): starting point (translated vertex) (3, 2), domain x ≥ 3, range y ≥ 2.

## 6. Equations

- Powers: xⁿ = a — see [B01](../B01-algebraic-skills/) for exact solving and substitution techniques (x⁴ − 5x² + 4 = 0 via y = x²).
- Mixed powers: x³·x^(1/2) = x^(7/2); x⁵/x² = x³; (x²)³ = x⁶.
- Roots: isolate, square (check conditions!), verify. A root function can meet a line in 0, 1 or 2 points; after squaring, check every candidate in the original equation.
