// C - Triangular Relationship

'use strict'
function main(input) {
  input = input.trim().split(' ')
  const N = input[0] - 0
  const K = input[1] - 0
  let ans = Math.pow(Math.floor(N / K), 3)
  if (K%2===0) ans += Math.pow(Math.floor((N + K/2) / K), 3)
  console.log(ans)
}

main(`3 2`) // 9

main(`5 3`) // 1

main(`31415 9265`) // 27

main(`35897 932`) // 114191