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
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
