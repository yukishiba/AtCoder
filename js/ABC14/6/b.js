'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp[0])
  const S = inp[1]
  const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let ans = ''
  for (let i = 0; i < S.length; i++) {
    ans += alp[alp.indexOf(S[i]) + (N%26)]
  }
  console.log(ans)
}
main(`13
ABCDEFGHIJKLMNOPQRSTUVWXYZ

`);
