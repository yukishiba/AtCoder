// C - Candles

'use strict'
function main(input) {
  let ans = -1
  let arr = []
  const calc = (p, n) => p > n ? p + n * 2 : n + p * 2

  input = input.trim().split('\n')
  const NK = input[0].split(' ').map(v => v - 0)
  input = input[1].split(' ').map(v => v - 0)
  for (let i = NK[1] - 1; i < NK[0]; i++) {
    const j = i - NK[1] + 1
    const p = input[j] < 0 ? Math.abs(input[j]) : 0
    const n = input[i] > 0 ? Math.abs(input[i]) : 0
    const move = calc(p, n)
    if (!~ans || move < ans) ans = move
  }
  console.log(~ans ? ans : 0)
}

main(`6 3
-30 -20 -10 10 20 30`) // 30

main(`5 3
-30 -10 10 20 50`) // 40

main(`3 2
10 20 30`) // 20

main(`1 1
0`) // 0

main(`8 5
-9 -7 -4 -3 1 2 3 4`) // 10