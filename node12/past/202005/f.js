'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())

  let ans1 = []
  let ans2 = []
  for (let i = 0; i < Math.floor(N / 2); i++) {
    let got = false
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        if (inp[i][j] === inp[N - 1 - i][k]) {
          ans1.push(inp[i][j])
          ans2.unshift(inp[i][j])
          got = true
        }
        if (got) break
      }
      if (got) break
    }
    if (!got) {
      return console.log('-1')
    }
  }
  if (N % 2) {
    ans1.push(inp[Math.floor(N / 2)][0])
  }
  console.log(ans1.join('') + ans2.join(''))
}

main(`5
abcde
fghie
opqrs
tevwx
fghie
`);
