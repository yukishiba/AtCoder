'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0].split(' ').map(n => Number(n));

  let count = 0
  let num = 1

  for (let i = 0; i < N; i++) {
    if (inp[i] !== num) {
      count++
    } else {
      num++
    }
  }
  console.log(count === N ? -1 : count)
}
main(`10
3 1 4 1 5 9 2 6 5 3
`);
