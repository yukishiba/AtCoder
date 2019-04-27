// D - Flipping Signs 

'use strict'
function main(input) {
  input = input.split('\n')[1].split(' ')
  let min = 10000000000
  let minusCount = 0
  input = input
    .map(val => {
      val = Number(val)
      let abs = Math.abs(val)
      if (val < 0) minusCount++
      if (abs < min) min = abs
      return abs
    })
    .reduce((prev, current) => prev + current)

  if (minusCount % 2) input -= min * 2
  
  console.log(input)
}

main(`3
-10 5 -4`) // 19

main(`5
10 -4 -8 -11 3`) // 30

main(`11
-1000000000 1000000000 -1000000000 1000000000 -1000000000 0 1000000000 -1000000000 1000000000 -1000000000 1000000000`) // 10000000000
