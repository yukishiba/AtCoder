'use strict'

function main(inp) {
  inp = inp.trim()
  console.log(inp[0] === inp[1] && inp[1] === inp[2] ? 'No' : 'Yes')
}

main(`BBA`)