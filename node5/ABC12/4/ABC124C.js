// C - Coloring Colorfully

'use strict'
function main(input) {
  input = input.trim().split('')
  let countA = 0
  let countB = 0
  input.forEach((c, i) => {
    if (i % 2 !== Number(c)) countA++;
    if (i % 2 === Number(c)) countB++;
  })
  console.log(Math.min(countA, countB))
}

main(`000`) // 1

main(`10010010`) // 3

main(`0`) // 0
