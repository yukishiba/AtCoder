// B - Great Ocean View

'use strict'
function main(input) {
  input = input.trim().split('\n')
  let max = 0
  let count = 0
  input[1].split(' ').forEach(height => {
    if (Number(height) >= max) {
      count++;
      max = Number(height)
    }
  })
  console.log(count)
}

main(`4
6 5 6 8`) // 3

main(`5
4 5 3 5 4`) // 3

main(`5
9 5 6 8 4`) // 1
