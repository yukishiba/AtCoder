// A - Consecutive Integers

'use strict'
function main(input) {
  input = input.trim().split(' ')
  console.log(Number(input[0]) + 1 - Number(input[1]))
}

main(`3 2`) // 2

main(`13 3`) // 11
