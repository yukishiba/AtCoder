// A - Ball Distribution

'use strict'
function main(input) {
  input = input.trim().split(' ').map(v => Number(v))
  let ans = input[0] - input[1]
  if (input[1] === 1) ans = 0
  console.log(ans)
}

main(`3 2`) // 1