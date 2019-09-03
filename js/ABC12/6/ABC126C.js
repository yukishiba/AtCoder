// C - Dice and Coin

'use strict'
function main(input) {
  input = input.trim().split(' ')
  let n = Number(input[0])
  let k = Number(input[1])
  let result = 0

  for (let i = 1; i <= n; i++) {
    if (i >= k) {
      result += 1 / n
    } else {
      let count = Math.ceil((Math.log(k / i) / Math.log(2)))
      result += Math.pow(0.5, count) / n
    }
  }

  console.log(result)
}

// main(`3 10`) // 0.145833333333
main(`100000 5`) // 0.999973749998
