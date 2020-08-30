// D - equeue
// 解説を読んでの実装

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NK = input.shift().split(' ').map(val => Number(val))
  const count = Math.min(...NK)
  input = input[0].split(' ').map(val => Number(val))

  const ans = []

  for(let l = 0; l <= count; l ++) {
    for (let r = 0; r <= count - l; r ++) {
      let temp = [
        ...input.slice(0, l),
        ...input.slice(NK[0] - r)
      ].sort((a, b) => a - b)
      let remain = NK[1] - l - r
      for (let i = 0; i < remain; i++) {
        if (temp[i] >= 0) break;
        temp[i] = 0
      }
      ans.push(temp.reduce((p, c) => p + c, 0))
    }
  }
  console.log(Math.max(...ans))
}

main(`1 1
-10`) // 0

main(`1 1
10`) // 10

main(`50 100
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 -25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49`) // 1200

main(`6 4
-10 8 2 1 2 6`) // 14

main(`6 4
-6 -100 50 -2 -5 -3`) // 44

main(`6 3
-6 -100 50 -2 -5 -3`) // 0
