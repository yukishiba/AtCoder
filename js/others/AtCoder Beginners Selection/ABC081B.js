'use strict'

function main(input) {
  input = input.split("\n")
  let nums = input[1].split(" ")

  const calc = num => {
    let count = 0
    while (num % 2 === 0) {
      num = num / 2
      count++
    }
    return count
  }
  console.log(Math.min(...nums.map(num => calc(num))))
}

main(
`3
8 12 40`
) // 2
main(
`4
5 6 8 10`
) // 0
main(
`6
382253568 723152896 37802240 379425024 404894720 471526144`
) // 8