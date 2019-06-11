// D - Lamp

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const HW = input.shift().split(' ').map(v => Number(v))
  input = input.map(r => r.split(''))
  let L = []
  let R = []
  let U = []
  let D = []
  let max = 0
  for (let h = 0; h < HW[0]; h++) {
    L[h] = []
    R[h] = []
    U[h] = []
    D[h] = []
    for (let w = 0; w < HW[1]; w++) {
      L[h][w] = 0
      U[h][w] = 0
      if (input[h][w] === '.') {
        L[h][w] = w === 0 ? 1 : L[h][w-1] + 1
        U[h][w] = h === 0 ? 1 : U[h-1][w] + 1
      }
    }
  }
  for (let h = HW[0] - 1; h >= 0; h--) {
    for (let w = HW[1] - 1; w >= 0; w--) {
      R[h][w] = 0
      D[h][w] = 0
      if (input[h][w] === '.') {
        R[h][w] = w === HW[1] - 1 ? 1 : R[h][w+1] + 1
        D[h][w] = h === HW[0] - 1 ? 1 : D[h+1][w] + 1

        const sum = L[h][w] + R[h][w]+ U[h][w] + D[h][w] - 3
        if (sum > max) max = sum
      }
    }
  }
  console.log(max)
}

main(`4 6
#..#..
.....#
....#.
#.#...`) // 8

main(`8 8
..#...#.
....#...
##......
..###..#
...#..#.
##....#.
#...#...
###.#..#`) // 13
