// A - Biscuit Generator 

'use strict'
function main(input) {
  input = input.split(' ');
  console.log(Math.floor((Number(input[2]) + 0.5) / Number(input[0])) * Number(input[1]))
}

main(`3 5 7`) // 10

main(`3 2 9`) //  6

main(`20 20 19`) // 0
