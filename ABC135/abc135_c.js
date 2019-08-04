// C - City Savers 

'use strict'
function main(i) {
  i = i.trim().split('\n')
  const N = Number(i.shift())
  const A = i.shift().split(' ').map(n => Number(n))
  const B = i.shift().split(' ').map(n => Number(n))
  let ans = 0
  for (let i = 0; i < N; i++) {
    if (A[i] >= B[i]) {
      ans += B[i]
      A[i] -= B[i]
      B[i] = 0
    } else {
      ans += A[i]
      B[i] -= A[i]
      A[i] = 0
      if (A[i+1] >= B[i]) {
        ans += B[i]
        A[i+1] -= B[i]
        B[i] = 0
      } else {
        ans += A[i+1]
        B[i] -= A[i+1]
        A[i+1] = 0
      }
    } 
  }
  console.log(ans)
}

main(`2
3 5 2
4 5`) // 9

main(`3
5 6 3 8
5 100 8`) // 22

main(`2
100 1 1
1 100`) // 3