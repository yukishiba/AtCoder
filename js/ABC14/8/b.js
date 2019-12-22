'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp[0])
  inp = inp[1].split(' ')
  let ans = ''
  for (let i = 0; i < N; i++) {
    ans += inp[0][i] + inp[1][i]
  }
  console.log(ans)
}
main(`2
ip cc

`);
