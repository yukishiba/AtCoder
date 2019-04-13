// A - Buttons

'use strict'
function main(input) {
  input = input.trim().split(' ')
  input.push(input[0] - 1)
  input.push(input[1] - 1)
  input.sort((a, b) => Number(b) - Number(a))
  console.log(Number(input.shift()) + Number(input.shift()))
}

main(`5 3`) // 9

main(`3 4`) // 7

main(`6 6`) // 12
