'use strict'

function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  const N = inp[0]
  const K = inp[1]
  console.log(N.toString(K).length)
}

main(`314159265 3
`)