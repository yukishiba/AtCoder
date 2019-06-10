// D - Lamp
// WA
'use strict'
function main(input) {
  input = input.trim().split('\n')
  const HW = input.shift().split(' ').map(v => Number(v))
  input = input.map(r => r.split(''))
  let r = new Array(HW[0]).fill(0)
  let rMax = new Array(HW[0]).fill([0,0])
  let c = new Array(HW[1]).fill(0)
  let cMax = new Array(HW[1]).fill([0,0])
  
  input.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === '.') {
        r[i]++
        c[j]++
      } else {
        if (r[i] > rMax[i][0]) rMax[i] = [r[i], j]
        if (c[j] > cMax[j][0]) cMax[j] = [c[j], i]
        r[i] = 0
        c[j] = 0
      }
    })
  })
  for (let i = 0; i < HW[0]; i++) {
    if (r[i] > rMax[i][0]) rMax[i] = [r[i], HW[1]]
  }
  for (let j = 0; j < HW[1]; j++) {
    if (c[j] > cMax[j][0]) cMax[j] = [c[j], HW[0]]
  }
  rMax = rMax.map((n, i) => [...n, i]).sort((a, b) => b[0] - a[0])
  cMax = cMax.map((n, i) => [...n, i]).sort((a, b) => b[0] - a[0])

  for (let i = 0; i < HW[0]; i++) {
    for (let j = 0; j < HW[1]; j++) {
      let col = cMax[j][2]
      if ((col < rMax[i][1]) && (col > rMax[i][1] - rMax[i][0])) {
        console.log(rMax[i][0] + cMax[j][0] - 1)
        return
      }
    }
  }
}

main(`4 6
#..#..
.....#
....#.
#.#...`) // 8
console.log('---')

main(`8 8
..#...#.
....#...
##......
..###..#
...#..#.
##....#.
#...#...
###.#..#`) // 13
