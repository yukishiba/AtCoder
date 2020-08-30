// A - +-x

'use strict'
function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  console.log(Math.max(inp[0] + inp[1], inp[0] - inp[1], inp[0] * inp[1]))
}

main(`-13 3`)

// main(``)

// main(``)
