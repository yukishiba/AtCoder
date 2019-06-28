// C - /\/\/\/

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const N = input.shift() - 0
  input = input[0].split(' ')
  let a = {}
  let b = {}
  let count = [0, 0]
  for (let i = 0; i < N; i++) {
    if (i%2) {
      let num = input[i] - 0
      if (!(num in a)) {
        a[num] = 0
        count[0]++
      }
      a[num]++
    } else {
      let num = input[i] - 0
      if (!(num in b)) {
        b[num] = 0
        count[1]++
      }
      b[num]++
    }
  }
  a = Object.keys(a).map(v => [v, a[v]]).sort((x, y) => y[1] - x[1])
  b = Object.keys(b).map(v => [v, b[v]]).sort((x, y) => y[1] - x[1])
  if (a[0][0]!==b[0][0]) {
    console.log(N - a[0][1] - b[0][1])
  } else if (a.length === 1) {
    console.log(N - a[0][1])
  } else {
    const ptnA = (N - a[1][1] - b[0][1])
    const ptnB = (N - a[0][1] - b[1][1])
    console.log(Math.min(ptnA, ptnB))
  }
}

main(`4
3 1 3 2`) // 1

main(`6
105 119 105 119 105 119`) // 0

main(`4
1 1 1 1`) // 2
