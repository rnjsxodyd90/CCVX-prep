# A10 — Descriptive statistics: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. The syllabus itself says this topic appears "to a very limited extent" (*zeer beperkt*) — the exam focuses on reading and computing the four measures correctly.

## 1. Mode and median (by hand)

- Sort the data first — every median question starts with sorting.
- Mode (*modus*): the most frequent value. A series can have no mode, one mode, or several (then it is called multimodal).
- Median (*mediaan*): the middle value of the sorted series. For an odd count it is the (n+1)/2-th value; for an even count, the mean of the two middle values (positions n/2 and n/2 + 1).

## 2. Mean and standard deviation

- Mean (*gemiddelde*): x̄ = (Σxᵢ)/n.
- Standard deviation (*standaardafwijking*) of a **population**: σ = √(Σ(xᵢ − x̄)²/n) — divide by n. (The sample version dividing by n − 1 is outside this exam; the calculator's SD/σ button, not s, is the matching one. Most Casio fx-82: MODE → STAT, enter data, then SHIFT S-VAR shows x̄, xσn, sx̄σn − 1...)
- Computation by hand is expected only for small populations; larger ones go via the statistics function of the simple calculator (which the CCVX explicitly allows). On a Casio fx-82: MODE → STAT, enter the data, then SHIFT → S-VAR for x̄ and xσn (the population σ).

## 3. Frequency distributions

- Mean from a frequency table: x̄ = Σ(fᵢ·xᵢ)/N with N = Σfᵢ.
- The standard deviation likewise uses frequencies: σ = √(Σ fᵢ(xᵢ − x̄)²/N).
- For grouped (class) data, use the class midpoints as xᵢ — and say so; the result is then an estimate.

## 4. Interpreting the measures

- Median vs mean: the median is robust against outliers; the mean follows every value. Skewed right (a few large values) pulls the mean above the median — typical for income and house prices.
- Mode: only sensible for discrete/categorical data with repeats.
- Standard deviation measures spread: two series with the same mean can differ wildly in σ. In words: the typical distance of the values from the mean.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — the four measures by hand

Scores of 9 students: 3, 5, 5, 6, 6, 6, 8, 9, 10.

**Solution.** Already sorted. Mode: 6 (three times). Median: 5th value of 9 → 6. Mean: (3+5+5+6+6+6+8+9+10)/9 = 58/9 ≈ 6.44. Standard deviation: deviations from 58/9... compute Σx² = 9 + 25 + 25 + 36 + 36 + 36 + 64 + 81 + 100 = 412. Variance = 412/9 − (58/9)² = 45.7778 − 41.5679 = 4.2099, so σ ≈ 2.05. (Shortcut formula: variance = mean of squares − square of mean.)

### Example 2 — even count

Sleep diary (hours): 7.5, 6, 8, 7, 6.5, 9.

**Solution.** Sorted: 6, 6.5, 7, 7.5, 8, 9. Median: mean of 3rd and 4th = (7 + 7.5)/2 = 7.25 h. Mode: none (all distinct). Mean: 44/6 ≈ 7.33 h.

### Example 3 — frequency table

Number of pets per household in a street: 0 pets ×12 households, 1 ×20, 2 ×14, 3 ×4.

**Solution.** N = 50. Mean: (0·12 + 1·20 + 2·14 + 3·4)/50 = (0 + 20 + 28 + 12)/50 = 60/50 = 1.2 pets. Median: values 25 and 26 in the sorted list — both in the "1" group — so median 1. Mode: 1 (largest group).

### Example 4 — grouped data with midpoints

Rent prices in classes: [400, 700⟩ ×8 ads (midpoint 550), [700, 1000⟩ ×22 (midpoint 850), [1000, 1300⟩ ×10 (midpoint 1150).

**Solution.** Estimated mean: (8·550 + 22·850 + 10·1150)/40 = (4400 + 18700 + 11500)/40 = 34 600/40 = €865.

### Example 5 — mean vs median with an outlier

Wages (€k/week): 400, 400, 420, 450, 480, 500, 2100.

**Solution.** Mean: (400+400+420+450+480+500+2100)/7 = 4750/7 ≈ 679 €/week — nobody earns near it. Median (sorted, 4th): 450. The median describes this group better; the mean is dragged up by the single €2100.
