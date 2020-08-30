'use strict'
function main(inp) {
  inp = inp.trim().split('\n').map(l => l.split(' ').map(n => Number(n)))
  const N = inp[0][0]
  const Q = inp[0][1]
  const arr = new Array(N).fill(0)
  for (let i = 1; i <= Q; i++) {
    arr[inp[i][0] - 1] += 1
    if (inp[i][1] < N) arr[inp[i][1]] += -1
  }
  arr[0] %= 2
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i] + arr[i-1]) % 2
  }
  console.log(arr.join(''))
}

main(`20 8
1 8
4 13
8 8
3 18
5 20
19 20
2 7
4 9`);
