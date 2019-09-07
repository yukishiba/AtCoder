// C - Maximal Value 

'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0].split(' ').map(n => Number(n));
  let ans = inp[0]
  for (let i = 1; i < N; i++) {
    if (i === N - 1) {
      ans += inp[i - 1]
    } else {
      ans += Math.min(inp[i], inp[i-1])
    }
  }
  console.log(ans)
}

main(`3
2 5`)

main(`2
3`)

main(`6
0 153 10 10 23`)
