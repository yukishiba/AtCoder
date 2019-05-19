// A - Biscuit Generator 

'use strict'
function main(input) {
  input = input.trim().split('\n');
  let nums = input.shift().split(' ')
  input = input[0].split('')
  input[nums[1] - 1] = input[nums[1] - 1].toLowerCase()
  console.log(input.join(''))
}

main(`4 3
CABA`) // CAbA
