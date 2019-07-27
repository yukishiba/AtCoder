// C - Modulo Summation 

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const N = Number(input.shift())
  input = input[0].split(' ').map(n => Number(n))
  let ans = 0
  for (let i = 0; i < N; i++) {
    ans += input[i] - 1
  }
  console.log(ans)
}

main(`3
3 4 6`) // 10

main(`5
7 46 11 20 11`) // 90

main(`7
994 518 941 851 647 2 581`) // 4527