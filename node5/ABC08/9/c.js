'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  inp.shift()
  const P = [0,0,0,0,0,0,1,1,1,2];
  const Q = [1,1,1,2,2,3,2,2,3,3];
  const R = [2,3,4,3,4,4,3,4,4,4];
  let S = new Array(5).fill(0)

  inp.forEach(str => {
    const index = 'MARCH'.indexOf(str[0])
    if (~index) S[index]++
  })
  let ans = 0
  for (let i = 0; i < 10; i++) {
    ans += S[P[i]] * S[Q[i]] * S[R[i]]
  }
  console.log(ans)
}

main(`5
MASHIKE
RUMOI
OBIRA
HABORO
HOROKANAI`)

main(`5
CHOKUDAI
RNG
MAKOTO
AOKI
RINGO`)