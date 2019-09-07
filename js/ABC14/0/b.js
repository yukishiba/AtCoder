// A - Password 

'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp.map(r => r.split(' ').map(n => Number(n)))
  let ans = 0
  for (let i = 0; i < N; i++) {
    let j = inp[0][i]
    ans += inp[1][j-1]
    if (i !== N - 1 && inp[0][i+1] - 1 === j) {
      ans += inp[2][j-1]
    }
  }
  console.log(ans);
}

main(`2
1 2
50 50
50

`)

// main(``)

// main(``)
