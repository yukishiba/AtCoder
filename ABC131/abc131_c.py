## C - Anti-Division
## Python で解こうとした。実装例3の誤差が取り切れず。

import math
import fractions

A, B, C, D = list(map(long,raw_input().split()))

def lcm(x, y):
  return (x * y) // fractions.gcd(x, y)

full = B - B/C - B/D + B/lcm(C,D)

print full

hiku = A
hiku -= math.ceil(float(A)/C)
hiku -= math.ceil(float(A)/D)
hiku += math.ceil(float(A)/lcm(C,D))

print float(B)/lcm(C,D)

print '{:.18g}'.format(full - hiku)