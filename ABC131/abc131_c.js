// C - Anti-Division
// これ18桁くると誤差出る。JSの限界。

'use strict'
function main(i) {
  const lcm = (a, b) => {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x%y);
    return (a * b) / gcd(a, b)
  }
  i = i.trim().split(' ').map(v => Number(v))
  let full = i[1]
  full -= Math.floor(i[1]/i[2])
  full -= Math.floor(i[1]/i[3])
  full += Math.floor(i[1]/lcm(i[2],i[3]))
  let not = i[0]
  not -= Math.ceil(i[0]/i[2])
  not -= Math.ceil(i[0]/i[3])
  not += Math.ceil(i[0]/lcm(i[2],i[3]))
  console.log(full - not)
}

main(`4 9 2 3`) // 2

main(`10 40 6 8`) // 23

main(`314159265358979323 846264338327950288 419716939 937510582`) // 532105071133627368
