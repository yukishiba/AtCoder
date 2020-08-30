'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const NK = inp[0].split(' ').map(n => Number(n));
  inp = inp[1].split(' ').map(n => Number(n));
  
  let sum = 0
  let index = 0
  for (let i = 0; i < NK[1]; i++) {
    sum += inp[i]
    index = i
  }

  let max = sum
  for (let i = NK[1]; i < inp.length; i++) {
    sum = sum - inp[i - NK[1]] + inp[i]
    if (max < sum) {
      max = sum
      index = i
    }
  }

  let kitai = 0
  for (let i = index - NK[1] + 1; i <= index; i++) {
    let sumNum = (1 + inp[i]) * inp[i] / 2
    kitai += sumNum / inp[i]
  }
  console.log(kitai)
}

main(`4 1
6 6 6 6


`)
