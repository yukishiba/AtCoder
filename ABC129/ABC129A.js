// A - Airplane
'use strict'
function main(input) {
  input = input.trim().split(' ').map(v => Number(v)).sort((a, b) => a - b)
  console.log(input[0] + input[1])
}

main(`1 3 4`)
