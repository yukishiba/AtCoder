'use strict'

function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  const N = inp[0]
  const R = inp[1]
  console.log(N > 9 ? R : R + (100 * (10 - N)))
}

main(`22 3051
`)