## C - Anti-Division

import fractions

A, B, C, D = map(int, input().split())

def lcm(x, y):
  return (x * y) // fractions.gcd(x, y)

CD = lcm(C,D)
A -= 1
ans = (B - A) - (B//C - A//C) - (B//D - A//D) + (B//CD - A//CD)

print(ans)