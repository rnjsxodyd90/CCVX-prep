# CCVX Mathematics A syllabus — English text version

Translated from *Programma voortentamen Wiskunde A* (in force since December 2018), the official CCVX document in this folder. The exam is a 3-hour written exam with open questions.

The exam programme is based on the Dutch VWO exam programme wiskunde A for 2019. Two important differences: (1) no graphing calculator or other ICT is allowed; (2) the domain Statistics and Probability is examined (in the VWO it is examined only in the school exam). All computations must be algebraic; a standard scientific calculator (Casio fx-82 or TI-30 class) with exponential, logarithmic and trigonometric functions is allowed.

## Exam programme (tentamenprogramma)

1. The candidate can analyse problem situations that lend themselves to it in mathematical terms, solve them, and translate the result back to the context.
2. The candidate masters the mathematical skills fitting the exam programme, including modelling and algebraising, ordering and structuring, analytical thinking and problem solving, manipulating formulas, abstracting, and logical reasoning.
3. The candidate can perform computations with numbers and variables, using the basic operations of arithmetic and algebra and working with brackets.
4. The candidate can recognise and use the characteristics of linear functions, quadratic functions, power functions, exponential functions, logarithmic functions and sine functions in graph, table and formula.
5. The candidate can set up and manipulate formulas and function rules for combinations and compositions of the types under (4), draw the corresponding graphs, solve equations and inequalities with algebraic methods (without a graphing calculator), and interpret the outcome in terms of a context.
6. The candidate can determine the derivative of linear, quadratic, power, exponential and logarithmic functions, use the rules of differentiation, and describe the changing behaviour of a function from its derivative. The use of the chain rule is limited to functions k(x) = f(g(x)) where f and g are single functions of the types just named.
7. The candidate can use the derivative to compute the positions of the minima and maxima of a graph by solving the corresponding equations algebraically, and can determine the nature of these extrema with a sketch of the graph.
8. The candidate can recognise and describe the behaviour of a sequence and perform calculations on it, in particular for arithmetic and geometric sequences.
9. The candidate can structure and schematise counting problems and use that in calculations and reasoning.
10. The candidate can determine the mode and the median of a series of individual observations and can compute the mean and the standard deviation of a population of limited size with a simple calculator.
11. The candidate can use the concept of probability to determine the probability of an outcome or event in a random process, using a probability (tree) diagram, combinatorics and probability rules.
12. The candidate can set up the probability distribution of random variables with a limited number of outcomes and compute the expectation and the standard deviation.
13. The candidate can state whether a situation involves a binomial probability distribution, can give the parameters of this distribution, and can use the corresponding formulas for probabilities, expectation and standard deviation.
14. The candidate can handle the parameters of the normal distribution — the mean (= expectation) and the standard deviation — and can use the rules of thumb for the location of 68% and 95% of the observations.
15. The candidate can determine the expectation and the standard deviation of the sum of two independent random variables, and of the sum and the mean of the outcomes of n independent repetitions of the same random experiment.
16. The candidate can set up a statistical testing procedure from a suitable problem situation:
    - state whether it is a mean test or a proportion test;
    - formulate the null hypothesis;
    - state whether the procedure is left-sided, right-sided or two-sided;
    - state how a given sample outcome must be converted into an exceedance probability;
    - interpret a given exceedance probability;
    - compute the critical values of the rejection region with the table in the formula sheet, and use them to interpret the given sample outcome.

## Formula sheet (printed on the last two pages of the exam)

- Quadratic formula: ax² + bx + c = 0 (a ≠ 0, b² − 4ac ≥ 0) gives x = (−b ± √(b² − 4ac))/(2a).
- Differentiation table: sum rule, product rule, quotient rule, chain rule (k′(x) = f′(g(x))·g′(x)).
- Logarithm rules: ᵍlog a + ᵍlog b = ᵍlog(ab); ᵍlog a − ᵍlog b = ᵍlog(a/b); ᵍlog(aᵖ) = p·ᵍlog a; ᵍlog a = ᵖlog a / ᵖlog g (with the usual conditions g,p > 0, ≠1, a,b > 0).
- Sum formulas: arithmetic sequence: Sum = ½ · number of terms · (first + last); geometric sequence: Sum = (u_{l+1} − u_e)/(r − 1) (r ≠ 1). Here e = index of the first term, l = index of the last term.
- Probability: E(X + Y) = E(X) + E(Y) for all random variables; σ(X + Y) = √(σ²(X) + σ²(Y)) for independent X and Y. √n-law: for n independent repetitions, sum S and mean X̄: E(S) = n·E(X), σ(S) = √n·σ(X); E(X̄) = E(X), σ(X̄) = σ(X)/√n.
- Binomial distribution, parameters n and p: P(X = k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ; E(X) = np; σ(X) = √(np(1−p)).
- Normal distribution with mean μ and standard deviation σ: Z = (X − μ)/σ is standard normal; P(X < g) = P(Z < (g − μ)/σ).
- Testing: for a normally distributed test statistic T with mean μ_T and standard deviation σ_T, the critical values of the rejection region are: α = 0.05: left-sided g = μ_T − 1.645σ_T, right-sided g = μ_T + 1.645σ_T, two-sided g_left = μ_T − 1.96σ_T and g_right = μ_T + 1.96σ_T; α = 0.01: 2.33 instead of 1.645 and 2.58 instead of 1.96.

## Concept list (uitwerking van het tentamenprogramma)

The syllabus works the programme out into a list of concepts, properties and skills. Summary in English; the Dutch original is the official text.

**Various computations.** Percentages and percentage change: (new − old)/old × 100%. Scientific notation. Fractions: adding, subtracting, multiplying, common denominators, simplifying, dividing by a fraction is multiplying by its reciprocal. Ratios: in a ratio table the cross products are equal. Computing with variables: expanding brackets, isolating a variable. Computing with units (e.g. 12 km in 5 minutes = 2.4 km/min = 40 m/s = 144 km/h).

**Powers and roots.** Powers aⁿ with rational n; the n-th root of a. Special exponents: a¹ = a, a⁰ = 1 (a ≠ 0), a⁻ⁿ = 1/aⁿ (a ≠ 0), a^(1/n) = ⁿ√a (a ≥ 0 for even n, and then ⁿ√a ≥ 0). The power rules: aᵐ·aⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, (ab)ⁿ = aⁿbⁿ, (a/b)ⁿ = aⁿ/bⁿ; (a + b)² ≠ a² + b².

**Straight lines and linear relations.** General equation mx + ny = c (n = 0 vertical, m = 0 horizontal); y = ax + b for non-vertical lines. Slope Δy/Δx through two points. Setting up a line from slope and a point. Intersection of two lines by eliminating y. Interpolating and extrapolating. Directly proportional (y = ax) and inversely proportional (y = a/x).

**Power relations.** y = axⁿ: vertex at (0,0) and symmetry for even n, point symmetry about (0,0) for odd n. Transformations: horizontal shift, vertical shift, vertical scaling — e.g. y = 3(x − 4)² + 5 from y = x².

**Growth formulas.** N = b·gᵗ with initial value b and growth factor g. Rising for g > 1, falling for 0 < g < 1, degenerate for g = 1. Growth factor and growth percentage. Converting growth to another time unit via the growth factor. Doubling time (g > 1), halving time (0 < g < 1), and back-computing the growth factor per time unit. Other growth formulas approaching a saturation level: N = a(1 − gᵗ) and N = a/(1 + c·gᵗ) (for 0 < g < 1 both rise towards a).

**Logarithms.** y = ᵍlog(x) means gʸ = x (g > 0, g ≠ 1, x > 0). ᵍlog(1) = 0, ᵍlog(g) = 1, ᵍlog(gⁿ) = n; log(x) means base 10. Graph increasing for g > 1, decreasing for 0 < g < 1; as x approaches 0 the graphs approach the y-axis. The logarithm rules (see formula sheet).

**Differentiation.** Standard derivatives: constant → 0; ax → a (so ax + b → a); axⁿ → anxⁿ⁻¹ (also for fractional or negative n); eˣ → eˣ (e ≈ 2.71828); gˣ → gˣ·ln(g); ln(x) → 1/x; ᵍlog(x) → 1/(x ln g). Rules: constant factor, sum, product, quotient, chain rule (see formula sheet); the chain rule only for k(x) = f(g(x)) with f and g single standard functions.

**Applications of the derivative.** f′(a) is the slope of the tangent at (a, f(a)). Increasing where f′ > 0, decreasing where f′ < 0. Extrema where f′ = 0; determine minima and maxima position algebraically and their nature with a sketch; the extreme points are the vertices (*toppen*) of the graph. Minimal and maximal growth rate: the derivative (the growth speed) can itself be differentiated.

**Sequences.** Direct formula (term from the index) and recursive formula (term from the previous one). Arithmetic sequence: u_{n+1} = u_n + a, direct u_n = u_0 + a·n. Geometric sequence: u_{n+1} = r·u_n, direct u_n = rⁿ·u_0. Sum formulas (formula sheet). Computing the index of a term by setting the direct formula equal to the term.

**Sine functions.** f(x) = A + B·sin(C·(x − D)): equilibrium A, amplitude |B|, C = 2π/period; for B > 0 the graph rises through the equilibrium at (D, A). Reading equilibrium, amplitude, period and starting point from a graph; determining them from the formula. Using period and the symmetry about maximum and minimum.

**Descriptive statistics** (very limited in this exam). Mode, median, mean and standard deviation of a series of individual observations; mean and standard deviation may be computed with the statistics function of a simple calculator; also for a frequency distribution.

**Systematic counting.** Visualising: tree diagram, path diagram, grid, contingency table, Venn diagram. Multiplication rule (I AND II), sum rule (I OR II but not both). Counting with and without repetition. Permutations and factorials (order matters). Combinations (order does not matter). Pascal's triangle: the number of sequences with 5 letters A and 3 letters B is C(8,3) = C(8,5) = 8!/(3!·5!) = 56. Combining counting techniques, e.g. sequences with 3 A's, 4 B's and 5 C's: C(12,3)·C(9,4).

**Probability.** An event is a selection of the outcomes of a random experiment. Laplace's probability definition for equally likely outcomes: P(G) = favourable/total. Empirical probabilities via relative frequencies. Conditional probabilities, often from a contingency table. Independent events: P(A given B) = P(A). Product rule for independent experiments: P(G₁ and G₂) = P(G₁)·P(G₂). Sum rule for mutually exclusive events: P(G₁ or G₂) = P(G₁) + P(G₂). The complement rule. Applying these in compound experiments.

**Random variables.** When outcomes are numbers, probabilities are written with a random variable X (e.g. P(X = 4)). The probability distribution lists all outcomes with their probabilities, often in a table. Expectation E(X) = Σ x·P(X = x); expectation of a sum = sum of expectations: E(X + Y) = E(X) + E(Y). Standard deviation (may be computed with the statistics function of the calculator). Standard deviation of the sum and of the mean of independent random variables; the √n-law (formula sheet).

**The binomial distribution.** Bernoulli experiment (success/failure). Binomial experiment: n repetitions, success probability p; n and p are the parameters. Single probability P(X = k) = C(n,k)·pᵏ(1−p)ⁿ⁻ᵏ. Cumulative probabilities only as sums of at most 3 single probabilities. E(X) = np, σ(X) = √(np(1−p)).

**The normal distribution.** The normal distribution and the Gaussian curve as approximation of a frequency distribution; parameters μ (mean = expectation) and σ (standard deviation). 50% of the observations lies below the mean; rules of thumb: 68% between μ − σ and μ + σ; 95% between μ − 2σ and μ + 2σ. Computing μ and/or σ from such percentages. A discrete random variable can often be approximated with a normal distribution; for a binomial X this is allowed when np ≥ 5, with μ_Y = np and σ_Y = √(np(1−p)), and continuity correction P(X ≤ k) = P(X < k + ½).

**Testing hypotheses.** From a description, derive the type of procedure and the null hypothesis: proportion test (binomial test) with H₀: p = p₀, or mean test (normal test) with H₀: μ = μ₀. Derive the alternative hypothesis: left-, right- or two-sided. The test statistic with its parameters: n and p₀ for the binomial test; μ₀ and σ for the normal test, where σ comes from the √n-law. Significance level: usually α = 0.05, sometimes 0.01. Deciding from an exceedance probability (which will usually be given, since tables and graphing calculators are not allowed). Deciding by comparing the sample outcome with the critical value of the rejection region, computed from the formula sheet; for a binomial test these formulas may be used when np₀ ≥ 5, and no continuity correction is needed then.

## Algebraic skills (overzicht van algebraïsche vaardigheden)

Solve standard equations: linear; quadratic (with the quadratic formula, or factoring where possible); power equations (even/odd exponents); root equations √x = a ⇔ x = a² (x, a ≥ 0); suitable exponential and logarithmic equations exactly; exponential equations with logarithms (gˣ = a ⇔ x = ᵍlog a). Inequalities, with intersection points computed algebraically. Systems by elimination/substitution. Setting up a line from slope and a point. Manipulating formulas: splitting equations (A·B = 0 ⇔ A = 0 ∨ B = 0; A² = B² ⇔ A = ±B; A·B = A·C ⇔ A = 0 ∨ B = C), factoring out, expanding, fraction arithmetic (common denominators, cross-multiplication A/B = C/D ⇔ AD = BC ∧ BD ≠ 0), roots (√A = B ⇔ A = B² ∧ A ≥ 0), applying the rules for exponents and logarithms. Combining formulas (e.g. revenue r = p·q and profit w = pq − k with brackets on substitution). Logarithmic formula work: changing base; isolating a variable from exponential or logarithmic formulas with Y = ᵍlog(X) ⇔ gʸ = X; converting ᵍlog(N) = at + b to N = B·Gᵗ (B = gᵇ, G = gᵃ) and back; converting ᵍlog(N) = a + b·ᵍlog(t) to N = A·tᵇ (A = gᵃ) and back.
