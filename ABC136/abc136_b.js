// B - Uneven Numbers
'use strict'
function main(inp) {
  inp = inp.trim()
  const N = inp - 0
  const L = inp.length - 1
  
  let ans = 0
  for (let i = 0; i < L; i++) {
    if (i%2 === 0) ans += Math.pow(10, i) * 9
  }
  if (L%2 === 0) ans+= N - (Math.pow(10,L) - 1)
  console.log(ans)
}

main(`11`) // 9

main(`136`) // 46

main(`100000`) // 90909
