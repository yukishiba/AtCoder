//  A - Digits Sum 

'use strict'
function main(input) {
  input = Number(input.trim())
  const sum = n => n.split('').reduce((p, c) => Number(p) + Number(c), 0)
  let ans = 0
  for (let i = 1; i < input; i++) {
    let j = input - i
    let c = sum(String(i)+String(j))
    if (!ans || ans > c) ans = c
  }
  console.log(ans)
}

main(`15`) // 6
main(`100000`) // 10
