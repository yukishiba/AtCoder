// C - Monsters Battle Royale 

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const N = Number(input.shift())
  input = input[0].split(' ').map(v => Number(v)).sort((a, b) => a - b)

  const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a
  }

  let ans = input[0]
  for (let i = 1; i < N; i++) {
    ans = gcd(ans, input[i])
  }
  console.log(ans)
}

main(`4
2 10 8 40`) // 2

main(`4
5 13 8 1000000000`) // 1

main(`3
1000000000 1000000000 1000000000`) // 1000000000
