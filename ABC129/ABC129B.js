// B - Balance
'use strict'
function main(input) {
  input = input.trim().split('\n')
  const N = Number(input.shift())
  input = input[0].split(' ').map(v => Number(v))
  let l = [input[0]]
  let r = [input[N-1]]
  let ans = 100
  for (let i = 1; i < N; i++) {
    l.push(l[i-1]+input[i])
    r.push(r[i-1]+input[N-i-1])
  }
  for (let i = 0; i < N - 1; i++) {
    let temp = Math.abs(l[i] - r[N-i-2])
    if (ans > temp) ans = temp
  }
  console.log(ans)
}

main(`3
1 2 3`) // 0

main(`4
1 3 1 1`) // 2

main(`8
27 23 76 2 3 5 62 52`) // 2
