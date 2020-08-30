'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0].split(' ').map(n => Number(n));

  let ans = 0
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      ans += inp[i] * inp[j]
    }
  }
  console.log(ans)
}

main(`7
5 0 7 8 3 3 2
`);
