# A11 — Systematic counting: practice

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o7 match the numbered learning outcomes in [README.md](README.md).

### matha-a11-q01 | points 2 | outcome o2 | difficulty easy

#### Question

A restaurant offers 2 starters, 5 mains and 3 desserts. How many different three-course menus are there?

#### Answer

30

#### Solution

Multiplication rule ("starter AND main AND dessert"): 2 × 5 × 3 = 30 menus.

### matha-a11-q02 | points 3 | outcome o3 | difficulty easy

#### Question

a. How many 4-digit PIN codes exist (digits 0–9)?

b. How many with all four digits different?

#### Answer

a. 10 000; b. 5040

#### Solution

a. With repetition: 10⁴ = 10 000. b. Without repetition: 10·9·8·7 = 5040.

### matha-a11-q03 | points 3 | outcome o4 | difficulty easy

#### Question

Ten athletes finish a race. In how many different ways can the gold, silver and bronze medals be distributed?

#### Answer

720

#### Solution

Order matters (gold ≠ silver ≠ bronze), no repetition: 10·9·8 = 720. (Formally: permutations of 3 out of 10 = 10!/7!.)

### matha-a11-q04 | points 3 | outcome o5 | difficulty easy

#### Question

From a group of 9 students a committee of 4 is chosen (no roles). How many committees are possible?

#### Answer

126

#### Solution

Order does not matter: C(9,4) = 9!/(4!·5!) = (9·8·7·6)/(4·3·2·1) = 3024/24 = 126.

### matha-a11-q05 | points 3 | outcome o6 | difficulty medium

#### Question

a. Write down row 6 of Pascal's triangle.

b. Use it to give C(6,2) and C(6,4), and explain why they are equal.

#### Answer

a. 1 6 15 20 15 6 1; b. both 15

#### Solution

a. Each entry is the sum of the two above it, starting from row 5 = 1 5 10 10 5 1: row 6 = 1 6 15 20 15 6 1. b. C(6,2) = 15 and C(6,4) = 15; C(n,k) = C(n,n−k) because choosing 2 to include equals choosing 4 to exclude.

### matha-a11-q06 | points 3 | outcome o6 | difficulty easy

#### Question

How many different sequences of the four letters A, A, B, B are there? (Give the number with a combination argument.)

#### Answer

6

#### Solution

Choose the two positions of the A's among the four: C(4,2) = 6. (Listing check: AABB, ABAB, ABBA, BAAB, BABA, BBAA — 6 ✓.)

### matha-a11-q07 | points 4 | outcome o7 | difficulty medium

#### Question

How many sequences of 6 letters consist of exactly 2 letters X, 3 letters Y and 1 letter Z?

#### Answer

60

#### Solution

Choose the positions of the X's: C(6,2) = 15; then of the Y's from the remaining 4: C(4,3) = 4; the Z fills the last spot. Total: 15 × 4 = 60.

### matha-a11-q08 | points 3 | outcome o1 | difficulty medium

#### Question

In a class of 30 students: 18 are in the math club, 14 in the chess club, and 8 in both. How many students are in neither club? Use a Venn-diagram argument.

#### Answer

6

#### Solution

In at least one club: 18 + 14 − 8 = 24 (the overlap counted twice). Neither: 30 − 24 = 6.

### matha-a11-q09 | points 3 | outcome o3 | difficulty easy

#### Question

a. How many 3-letter passwords can be made from the 26 letters of the alphabet (repetition allowed)?

b. How many of them consist of vowels only (A, E, I, O, U)?

#### Answer

a. 17 576; b. 125

#### Solution

a. 26³ = 17 576. b. 5 letters with repetition: 5³ = 125.

### matha-a11-q10 | points 4 | outcome o7 | difficulty hard

#### Question

On a grid, you walk from point (0, 0) to point (4, 3) using only steps → (one right) and ↑ (one up). How many different routes are there?

#### Answer

35

#### Solution

Every route is a sequence of 4 letters R (right) and 3 letters U (up): 7 steps in total. Count: C(7,3) = 7!/(3!·4!) = 35. (Path-diagram numbers along the way confirm: the counts add to 35 at the corner (4,3).)
