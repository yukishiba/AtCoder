// A - Apple Pie
'use strict'
function main(input) {
  input = input.trim().split(' ')
  let P = Number(input.shift()) * 3 + Number(input.shift())
  console.log(Math.floor(P / 2))
}

main(`32 21`)
