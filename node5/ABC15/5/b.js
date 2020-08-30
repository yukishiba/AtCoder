'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0].split(' ').map(n => Number(n));

  let ans = 'APPROVED';
  for (let n of inp) {
    if (n % 2 === 0) {
      if ((n % 3 !== 0) && (n % 5 !== 0)) {
        ans = 'DENIED';
      }
    }
  }
  console.log(ans)
}

main(`3
28 20 24

`)
