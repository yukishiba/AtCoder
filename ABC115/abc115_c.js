// C - Christmas Eve

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NM = input.shift().split(' ').map(v => Number(v))
  input = input.map(v => Number(v)).sort((a, b) => a - b)

  let distance = []
  for (let i = 0; i <= NM[0] - NM[1]; i++) {
    distance.push(input[i+NM[1]-1] - input[i])
  }
  console.log(Math.min(...distance))
}

main(`5 3
10
15
11
14
12`) // 2

main(`5 3
5
7
5
7
7`) // 0
