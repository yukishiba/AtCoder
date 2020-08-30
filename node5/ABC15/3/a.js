'use strict'

function main(inp) {
  inp = inp.trim().split(' ')
  console.log(Math.ceil(inp[0]/inp[1]))
}

main(`3 2`)
