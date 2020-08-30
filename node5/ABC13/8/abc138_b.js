// B - Resistors in Parallel 

'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0].split(' ').map(n => Number(n));

  let ans = 0
  for (let i = 0; i < N; i++) {
    ans += 1 / inp[i];
  }

  console.log(1 / ans)
}


main(`3
200 200 200`) 