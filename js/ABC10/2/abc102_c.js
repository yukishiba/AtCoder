// C - Linear Approximation

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const N = Number(input.shift())
  input = input[0].split(' ').map(n => Number(n))
  let center = []
  for (let i = 0; i < N; i++) {
    center.push(input[i] - i - 1)
  }
  center = center.sort((a, b) => a - b)[Math.floor(center.length/2)]
  let ans = 0
  for (let i = 0; i < N; i++) {
    ans += Math.abs(input[i] - i - 1 - center)
  }
  console.log(ans)
}

main(`5
2 2 3 5 5`) // 2

main(`9
1 2 3 4 5 6 7 8 9`) // 0

main(`6
6 5 4 3 2 1`) // 18

main(`7
1 1 1 1 2 3 4`) // 6
