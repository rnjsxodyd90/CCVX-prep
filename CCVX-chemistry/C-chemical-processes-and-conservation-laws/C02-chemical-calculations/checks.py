#!/usr/bin/env python3
"""Recompute the worked answers in source/ and exercises.md, and assert that they match.

    python3 checks.py
"""
import math
import re
from decimal import ROUND_HALF_UP, Decimal

# Relative atomic masses from Binas table 99; constants from Binas table 7.
A = {"H": 1.008, "C": 12.01, "N": 14.01, "O": 16.00, "Na": 22.99, "Mg": 24.31,
     "Al": 26.98, "S": 32.06, "Cl": 35.45, "Br": 79.90}
NA = 6.022e23  # mol⁻¹
U = 1.66054e-27  # kg


def M(formula):
    """Molar mass in g/mol of a formula without brackets, such as C3H8O3."""
    return sum(A[el] * int(n or 1) for el, n in re.findall(r"([A-Z][a-z]?)(\d*)", formula))


def sig(x, n):
    """x rounded half up to n significant figures, as the sources and marking schemes round."""
    d = Decimal(repr(x))
    return float(d.quantize(Decimal(1).scaleb(d.adjusted() - n + 1), ROUND_HALF_UP))


checks = 0


def check(ok, what):
    global checks
    assert ok, what
    checks += 1


# source/ecoreizen-bron3-chemisch-rekenen, §3.1: 200 g MgSO4 needs 40.4 g Mg.
check(sig(M("H2SO4"), 4) == 98.08 and sig(M("MgSO4"), 4) == 120.4, "§3.1 molecular masses")
check(sig(200 * A["Mg"] / M("MgSO4"), 3) == 40.4, "§3.1 mass ratio")

# §3.2: Avogadro's number from 1 u, the glucose example, and two errata.
check(sig(1.00e-3 / U, 3) == 6.02e23, "§3.2 1.00 g of H atoms")
check(sig(0.030 * 180.2, 2) == 5.4, "§3.2 0.030 mol glucose")
check(6.02e23 * 5e-6 < 1e-6 * 5.97e24, "§3.2 erratum: a mole of 5 mg ants is under a millionth of the Earth")
check(sig(M("C3H8O3"), 4) == 92.09, "§3.2 erratum: 1,2,3-propanetriol is C3H8O3")

# §3.3: 100 mL of 0.015 mol/L NaCl.
check(sig(M("NaCl"), 4) == 58.44 and sig(0.015 * 0.100 * 58.44, 2) == 0.088, "§3.3 NaCl in solution")

# §3.4: worked example 1 (a 50 mL sip of water) and worked example 2 (Cl in PVC).
check(sig(50 * 0.998, 3) == 49.9 and sig(M("H2O"), 4) == 18.02, "§3.4 step 1 mass, M(H2O)")
check(sig(49.9 / 18.02, 3) == 2.77 and sig(2.77 * NA, 2) == 1.7e24, "§3.4 steps 2 and 3")
check(sig(M("C2H3Cl"), 4) == 62.49 and sig(100 * A["Cl"] / M("C2H3Cl"), 4) == 56.73, "§3.4 Cl in PVC")

# §3.5: oxygen for 3.45 mol butane.
check(sig(13 / 2 * 3.45, 3) == 22.4, "§3.5 mole ratio")

# §3.6: bromine for 10 g aluminium. The source rounds n(Al) first and gets 0.557 mol.
check(sig(10 / A["Al"], 3) == 0.371 and sig(3 / 2 * 0.371, 3) == 0.557, "§3.6 as printed")
check(sig(3 / 2 * 10 / A["Al"], 3) == 0.556, "§3.6 without intermediate rounding")
check(sig(2 * A["Br"], 5) == 159.80 and sig(3 / 2 * 10 / A["Al"] * 159.80, 2) == 89, "§3.6 grams of bromine")

# exercises.md 1: CCVX example exam 1, question 1d. NH3 : H3O+ = 1 : 1.
check(sig(25.0e-3 * 0.100 / 20.0e-3, 3) == 0.125, "exercise 1 molarity")

# exercises.md 2: CCVX example exam 2, questions 2a and 2d (mmol throughout).
bromine = 3 * 7.00
oxine = (bromine - 0.660) / 2
al = oxine / 3
check(sig(bromine, 3) == 21.0, "exercise 2a bromine")
check(sig(oxine, 4) == 10.17 and sig(al, 3) == 3.39, "exercise 2d oxine and Al3+")
check(sig(al * A["Al"], 3) == 91.5 and sig(al * A["Al"] / 10.0, 3) == 9.15, "exercise 2d mg Al3+ per mL")
check(sig(al / 10.0, 3) == 0.339, "exercise 2d mmol Al3+ per mL")

# exercises.md 3: CCVX example exam 1, question 5b. C3H8O3 + 3 HNO3 -> C3H5N3O9 + 3 H2O.
glycerol = 100e3 / M("C3H8O3")
nitric = 250e3 / M("HNO3")
check(sig(glycerol, 4) == 1086 and sig(nitric, 3) == 3970 and sig(3 * glycerol, 3) == 3260, "exercise 3 amounts")
check(nitric > 3 * glycerol, "exercise 3 nitric acid is in excess")
check(sig(glycerol * M("C3H5N3O9") / 1e3, 4) == 246.6, "exercise 3 kg glyceryl trinitrate")
check(sig(100 * glycerol * M("C3H5N3O9") / 1e3 / (100 + 250 + 150), 3) == 49.3, "exercise 3 mass %")
check(sig(100 / 92.1 * 227, 4) == 246.5, "exercise 3 CCVX's rounded mass")

# exercises.md 4: CvTE vwo 2024-I, question 10. CH2O2 -> CO2 + H2 at 90.0 % yield.
hydrogen = 6.33e3 / M("H2")
acid = hydrogen / 0.900
kg = acid * M("CH2O2") / 1e3
check(sig(hydrogen, 4) == 3140 and sig(acid, 4) == 3489 and sig(kg, 4) == 160.6, "exercise 4 steps 2 to 4")
check(sig(kg / 1.22e3, 4) == 0.1316 and sig(kg / 1.22e3 * 1e3, 3) == 132, "exercise 4 volume")
check(sig(6.33e3 / 2.02 / 0.900 * 46.0e-3 / 1.22e3 * 1e3, 3) == 131, "exercise 4 as in the marking scheme")

# exercises.md 5: CvTE vwo 2024-II, question 25. N2O4 in the Apollo cabin.
n2o4 = 11 / M("N2O4")
ppm = n2o4 * 2.39e-2 / 5.9 * 1e6
check(sig(n2o4, 4) == 0.1195 and sig(n2o4 * 2.39e-2, 3) == 2.86e-3, "exercise 5 steps 1 and 2")
check(sig(ppm, 2) == 4.8e2 and ppm > 300, "exercise 5 volume-ppm above the limit")
check(sig(11 / 92.0, 3) == 0.120 and sig(11 / 92.0 * 2.39e-2, 3) == 2.86e-3, "exercise 5 as in the marking scheme")
check(sig(0.120 * 2.39e-2, 3) == 2.87e-3, "exercise 5 with the amount rounded first")

# notes.md: the examples that aren't from a source.
check(sig(-math.log10(2.5e-3), 3) == 2.60, "notes pH example")
check(sig(-math.log10(0.020), 3) == 1.70 and sig(10 ** -2.60, 3) == 2.51e-3, "notes Slikken of spuiten pH conversions")
check(sig(13 / 2 * 1.0, 2) == 6.5, "notes volume ratio of butane and oxygen")

print(f"all {checks} checks passed")
