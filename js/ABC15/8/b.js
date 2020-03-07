'use strict'

// WA → cpp で解き直し

function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  const N = inp[0]
  const A = inp[1]
  const B = inp[2]

  let count = Math.floor(N / (A + B)) * A
  count += Math.min((N % (A + B)), A)
  console.log(count)
}

main(`6 2 4`)