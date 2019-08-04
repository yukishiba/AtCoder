// A - Transfer 
'use strict'
function main(inp) {
  inp = inp.split(' ').map(n => n - 0)
  let ans = inp[2] - (inp[0] - inp[1])
  console.log(ans > 0 ? ans : 0)
}

main(`6 4 3`) // 1

main(`8 3 9`) // 4

main(`12 3 7`) // 0
