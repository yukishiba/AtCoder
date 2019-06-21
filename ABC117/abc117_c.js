// C - Streamline

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NM = input.shift().split(' ').map(v => Number(v))
  input = input[0].split(' ').map(v => Number(v)).sort((a, b) => a - b)

  if (NM[1] - NM[0] <= 0 || NM[1] === 1) return console.log(0)

  let distance = []
  for (let i = 1; i < NM[1]; i++) {
    distance.push(input[i] - input[i - 1])
  }
  distance = distance.sort((a, b) => b - a)

  let ans = input[NM[1]-1] - input[0]
  for (let j = 0; j < NM[0] - 1; j++) {
    ans -= distance[j]
  }
  console.log(ans)
}

main(`2 5
10 12 1 2 14`) // 5

main(`3 7
-10 -3 0 9 -100 2 17`) // 19

main(`100 1
-100000`) // 0
