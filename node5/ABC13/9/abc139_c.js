// C - Lower

'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0].split(' ').map(n => Number(n));
  let temp = 0
  let max = 0

  for (let i = 1; i < N; i++) {
    if (inp[i] > inp[i - 1]) {
      if (temp > max) max = temp
      temp = 0
    } else {
      temp++
    }
  }
  if (temp > max) max = temp

  console.log(max)
}

main(`5
10 9 8 10 6`) // 2

main(`4
1 2 3 4`) // 0