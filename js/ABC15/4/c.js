'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0].split(' ').map(n => Number(n)).sort((a, b) => a - b)
  let past = inp[0]
  for (let i = 1; i < inp.length; i++) {
    if (past === inp[i]) return console.log('NO')
    past = inp[i]
  }
  return console.log('YES')
}

main(`5
2 6 1 4 5


`)
