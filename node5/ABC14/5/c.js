'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp.map(r => r.split(' ').map(n => Number(n)))

  let sum = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const x = Math.pow(inp[i][0] - inp[j][0], 2)
      const y = Math.pow(inp[i][1] - inp[j][1], 2)
      sum += Math.sqrt(x + y)
    }
  }
  console.log(sum / N / (N - 1) * (N - 1))
}
main(`8
-406 10
512 859
494 362
-955 -475
128 553
-986 -885
763 77
449 310
`);
