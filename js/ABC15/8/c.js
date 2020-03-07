'use strict'

function main(inp) {
  inp = inp.trim().split(' ')
  const A = Number(inp[0])
  const B = Number(inp[1])

  const t8 = Math.ceil(A / 0.08)
  const t10 = Math.ceil(B / 0.1)

  for (let i = Math.min(t8, t10); i <= Math.max(t8, t10); i++) {
    if (Math.floor(i * 0.08) === A && Math.floor(i * 0.1) === B) {
      return console.log(i)
    }
  }
  console.log(-1)
}

main(`1 1
`)
