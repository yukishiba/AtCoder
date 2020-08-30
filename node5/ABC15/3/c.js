'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  inp[0] = inp[0].split(' ').map(n => Number(n));
  const H = inp[1].split(' ').map(n => Number(n)).sort((a, b) => a - b)
  const N = inp[0][0]
  const K = inp[0][1]

  let ans = 0
  for (let i = 0; i < N - K; i++) {
    ans += H[i]
  }
  console.log(ans)
}

main(`3 0
1000000000 1000000000 1000000000
`)
