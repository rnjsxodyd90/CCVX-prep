# A10 — Descriptive statistics: practice

Eight original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o4 match the numbered learning outcomes in [README.md](README.md).

### matha-a10-q01 | points 3 | outcome o1 | difficulty easy

#### Question

Series: 2, 4, 4, 5, 7, 7, 7, 8, 9. Determine the mode, the median and the mean (2 decimals).

#### Answer

Mode 7; median 7; mean ≈ 5.89

#### Solution

Sorted already. Mode: 7 (three times — most frequent). Median: 9 values, the 5th: 7. Mean: (2+4+4+5+7+7+7+8+9)/9 = 53/9 ≈ 5.89.

### matha-a10-q02 | points 3 | outcome o1 | difficulty easy

#### Question

Session times in the library (hours): 3, 5, 8, 10. Determine the mode, median and mean.

#### Answer

No mode; median 6.5; mean 6.5

#### Solution

All values distinct: no mode. Sorted: 3, 5, 8, 10; with an even count the median is the mean of the two middle values: (5 + 8)/2 = 6.5. Mean: 26/4 = 6.5.

### matha-a10-q03 | points 4 | outcome o2 | difficulty medium

#### Question

Compute by hand the mean and the standard deviation of: 2, 4, 4, 4, 5, 5, 7, 9.

#### Answer

Mean 5; σ = 2 exactly

#### Solution

Mean: (2+4+4+4+5+5+7+9)/8 = 40/8 = 5. Deviations: −3, −1, −1, −1, 0, 0, 2, 4; squares: 9, 1, 1, 1, 0, 0, 4, 16 with sum 32. Variance: 32/8 = 4, so σ = √4 = 2.

### matha-a10-q04 | points 4 | outcome o3 | difficulty medium

#### Question

Goals per match of a football team over 20 matches: 0 goals in 4 matches, 1 in 6, 2 in 8, 3 in 2.

a. Compute the mean number of goals per match.

b. Determine the median and the mode.

#### Answer

a. 1.4 goals; b. median 1.5, mode 2

#### Solution

a. Mean = (0·4 + 1·6 + 2·8 + 3·2)/20 = 28/20 = 1.4. b. Sorted, positions 1–4 are 0, positions 5–10 are 1, positions 11–18 are 2: the 10th and 11th values are 1 and 2, so median (1+2)/2 = 1.5. Mode: 2 (the largest group, 8 matches).

### matha-a10-q05 | points 3 | outcome o4 | difficulty medium

#### Question

Series I: 5, 6, 7, 8, 9. Series II: 5, 6, 7, 8, 90. Compare their medians and means and explain which measure is robust against outliers.

#### Answer

Medians both 7; means 7 and 23.2 respectively — the median is robust

#### Solution

Both series have median 7 (the middle value). Mean I = (5+6+7+8+9)/5 = 35/5 = 7; mean II = (5+6+7+8+90)/5 = 116/5 = 23.2. The single large value does not move the median at all, but drags the mean from 7 to 23.2: the median is robust, the mean is not.

### matha-a10-q06 | points 4 | outcome o3 | difficulty medium

#### Question

Visitors' ages grouped: [20, 30⟩ ×6 visitors, [30, 40⟩ ×14, [40, 50⟩ ×12, [50, 60⟩ ×8. Estimate the mean age with the class midpoints (1 decimal).

#### Answer

≈ 40.5 years

#### Solution

Midpoints: 25, 35, 45, 55. Estimated mean = (6·25 + 14·35 + 12·45 + 8·55)/40 = (150 + 490 + 540 + 440)/40 = 1620/40 = 40.5 years.

### matha-a10-q07 | points 3 | outcome o2 | difficulty medium

#### Question

For the values 1, 2, 3, 4, 5, compute the variance with the shortcut formula (mean of squares minus square of the mean) and give the standard deviation (2 decimals).

#### Answer

Variance 2; σ = √2 ≈ 1.41

#### Solution

Mean = 3; mean of squares = (1+4+9+16+25)/5 = 55/5 = 11. Variance = 11 − 3² = 2. Standard deviation = √2 ≈ 1.41. (Same as the direct route: deviations ±2, ±1, 0, squares 4, 1, 0, 1, 4, mean 2 ✓.)

### matha-a10-q08 | points 3 | outcome o4 | difficulty easy

#### Question

For each purpose, choose the best-fitting measure and explain briefly:

a. "The typical house price in Amsterdam."

b. "The best-selling ice-cream flavour in the shop."

c. "Consistency of pill mass produced on a line."

#### Answer

a. Median; b. mode; c. standard deviation (small σ)

#### Solution

a. Median — robust against a few very expensive houses. b. Mode — the most frequent (categorical data, no mean exists). c. Standard deviation — a small σ means the masses stay close to the target mean.
