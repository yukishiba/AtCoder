// C - Minimization 

'use strict'
function main(input) {
  input = input.trim().split('\n').shift().split(' ')
  let M = input[1] - 0
  let N = input[0] - M
  let count = 1
  count += Math.ceil(N / (M - 1))
  console.log(count)
}

main(`4 3
2 3 1 4`) // 2

main(`3 3
1 2 3`) // 1

main(`8 3
7 3 1 8 4 6 2 5`) // 4
