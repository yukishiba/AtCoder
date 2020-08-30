//  A - Digits Sum 
// 解説を見たあと

'use strict'
function main(input) {
  input = input.trim()
  if (input.match(/^10+$/)) {
    console.log(10)
  } else {
    console.log(input.split('').reduce((r, c) => Number(r) + Number(c), 0))
  }
}

main(`15`) // 6
main(`10`) // 10
main(`50`) // 5
main(`1001000`) // 2
