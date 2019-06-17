// C - Rectangle Cutting
'use strict'
function main(input) {
  input = input.trim().split(' ').map(v => Number(v))
  let area = (input[0] * input[1] / 2).toFixed(6) + ' '
  area += (input[0] / 2 === input[2] && input[1] / 2 === input[3]) ? 1 : 0
  console.log(area);
}

main(`2 3 1 2`) // 3.000000 0

main(`2 2 1 1`) // 2.000000 1
