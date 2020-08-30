'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  inp[0] = inp[0].split(' ').map(n => Number(n));
  const A = inp[1].split(' ').map(n => Number(n));
  const H = inp[0][0]
  
  let sum = 0
  A.forEach(n => sum += n);
  console.log(sum >= H ? 'Yes' : 'No')
}

main(`211 5
31 41 59 26 53

`)
