'use strict'

const divisors = n => {
  let dest = []
  for (let i = 1; i < Math.floor(Math.pow(n, 0.5) + 1); i++) {
    if (n % i === 0) {
      dest.push(i)
      if (Math.floor(n / i) !== i) {
        dest.push(Math.floor(n / i))
      }
    }
  }
  return dest.sort((a, b) => a - b)
}

function main(inp) {
  inp = Number(inp.trim())
  while (1) {
    let temp = divisors(inp)
    if (temp.length === 2) break
    inp++
  }
  console.log(inp)
}

main(`99992

`)
