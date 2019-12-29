'use strict'

function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  if (inp[0] > inp[2]) {
    inp[0] = inp[0] - inp[2]
    inp[2] = 0
  } else {
    inp[2] = inp[2] - inp[0]
    inp[0] = 0
    inp[1] = inp[1] > inp[2] ? inp[1] - inp[2] : 0
  }

  console.log(inp[0] + ' ' + inp[1])
}

main(`500000000000 500000000000 1000000000000

`)
