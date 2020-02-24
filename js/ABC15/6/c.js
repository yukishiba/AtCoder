'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  const X = inp[0].split(' ').map(n => Number(n));
  
  let sum = 0
  for (let i = 0; i < N; i++) {
    sum += X[i]
  }
  let ave = Math.round(sum / N)

  let cost = 0
  for (let i = 0; i < N; i++) {
    cost += Math.pow(X[i] - ave, 2)
  }
  console.log(cost)
}

main(`7
14 14 2 13 56 2 37
`)
