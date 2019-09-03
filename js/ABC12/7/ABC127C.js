// C - Prison
'use strict'
function main(input) {
  input = input.trim().split('\n')
  input.shift()
  let min = 0
  let max = 1000000
  input.forEach(val => {
    let temp = val.split(' ').map(val => Number(val))
    if (temp[0] > min) min = temp[0]
    if (temp[1] < max) max = temp[1]
  })
  let ans = max - min + 1
  console.log(ans > 0 ? ans : 0)
}

main(`4 2
1 3
2 4
`) // 2

/**
 * 1 ... 123
 * 2 ... 234
 */

main(`10 3
3 6
5 7
6 9`) // 1

/**
 * 1 ... 3456
 * 2 ... 567
 * 3 ... 6789
 */

main(`100000 1
1 100000`) // 100000


main(`10 3
3 4
5 7
6 9`) // 0

/**
 * 1 ... 3456
 * 2 ... 567
 * 3 ... 6789
 */


