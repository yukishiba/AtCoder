// C - Five Transportations 

'use strict'
function main(input) {
  input = input.trim().split('\n')
  let num = input.shift()
  const bottleneck = Math.ceil(num / Math.min(...input))

  console.log(bottleneck + 4)
}

main(`5
3
2
4
3
5`) // 7 = 4 + 3

main(`10
123
123
123
123
123`) // 5 = 4 + 1

main(`10000000007
2
3
5
7
11`) // 5000000008
