'use strict'

function main(inp) {
  inp = Number(inp.trim())

  let ans = 1
  let enemy = 1
  let num = inp
  while(1) {
    if (num > 1) {
      num = Math.floor(num / 2)
      enemy *= 2
      ans += enemy
    } else {
      break
    }
  }
  console.log(ans)
}

main(`1000000000000
`)
