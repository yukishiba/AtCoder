// C - Green Bin 

'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0].split(' ').map(n => Number(n))
    .sort((a, b) => a - b)
  
  let ans = [inp[0]]
  for (let i = 1; i < N; i++) {
    ans[i] = (ans[i - 1] + inp[i]) / 2
  }
  console.log(ans[N-1])
}

main(`5
138 138 138 138 138`)
