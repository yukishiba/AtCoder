// C - To Infinity

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const S = input.shift().split('')
  const K = Number(input[0])
  let ans = ''
  for (let i = 0; i < S.length && i < K; i++) {
    ans = S[i]
    if (Number(ans) > 1) break
  }
  console.log(ans)
}

main(`1214
4`) // 2

main(`3
157`) // 3

main(`299792458
9460730472580800`) // 2