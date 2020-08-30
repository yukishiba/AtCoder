// C - Base -2 Number

'use strict'
function main(input) {
  input = Number(input.trim())
  let ans = ''
  while (Math.abs(input) > 0) {
    if (Math.abs(input % 2)){
      if (ans.length % 2 === 1) {
        input++
      } else {
        input--
      }
      ans = '1' + ans
    } else {
      ans = '0' + ans
    }
    input = input / 2
  }
  console.log(ans || '0')
}

main(`-9`) // 1011

main(`123456789`) // 11000101011001101110100010101

main(`0`) // 0