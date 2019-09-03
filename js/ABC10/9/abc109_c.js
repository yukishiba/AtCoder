// C - Skip

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NX = input[0].split(' ').map(v => v - 0)
  input = input[1].split(' ').map(v => Math.abs(v - NX[1]))

  const gcd = (x, y) => y === 0 ? x : gcd(y, x%y);
  for (let i = 1; i < NX[0]; i ++) {
    input[i] = gcd(input[i], input[i-1])
  }
  console.log(input[NX[0]-1])
}

main(`3 81
33 105 57`) // 24

main(`1 1
1000000000`) // 999999999
