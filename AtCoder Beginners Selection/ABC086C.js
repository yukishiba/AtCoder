// ABC086C - Traveling

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const N = Number(input.shift())
  input = input.map(r => r.split(' ').map(v => Number(v)))
  input.unshift([0,0,0])
  for (let i = 1; i <= N; i++) {
    let past = input[i-1]
    let now = input[i]
    let move = Math.abs(now[1] - past[1]) + Math.abs(now[2] - past[2])
    let time = now[0] - past[0] - move
    if (time < 0 || time % 2 === 1) {
      return console.log('No')
    }
  }
  console.log('Yes')
}

main(`2
3 1 2
6 1 1`) // Yes

main(`1
2 100 100`) // No

main(`2
5 1 1
100 1 1`) // No
