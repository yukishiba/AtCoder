// C - Anti-Division
// これ18桁くると誤差出る。JSの限界。
// bigInt 対応はせず、pythonで解くことにした → abc131_c.py

'use strict'
function main(i) {
  const lcm = (a, b) => {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x%y);
    return (a * b) / gcd(a, b)
  }
  const fl = n => Math.floor(n)

  i = i.trim().split(' ')
  const A = i[0] - 1
  const B = i[1] - 0
  const C = i[2] - 0
  const D = i[3] - 0
  const CD = lcm(C,D)  
  const ans = (B-A) - (fl(B/C) - fl(A/C)) - (fl(B/D) - fl(A/D)) + (fl(B/CD) - fl(A/CD))
  console.log(ans)
}

main(`4 9 2 3`) // 2

main(`10 40 6 8`) // 23

main(`314159265358979323 846264338327950288 419716939 937510582`) // 532105071133627368
