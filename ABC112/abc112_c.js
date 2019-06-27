// C - Pyramid

'use strict'
function main(input) {
  input = input.trim().split('\n')
  input.shift()
  input = input.map(v => v.split(' ').map(w => w - 0))
    .filter(p => p[2] > 0)

  if (input.length === 1) {
    return console.log(input[0].join(' '))
  }
  for (let x = 0; x < 101; x++) {
    for (let y = 0; y < 101; y++) {
      let same = true
      let height = -1
      input.forEach(p => {
        if (p[2] > 0) {
          const h = p[2] + Math.abs(x - p[0]) + Math.abs(y - p[1])
          if (height < 0) height = h
          if (height !== h) same = false
        }
      })
      if (same) return console.log([x, y, height].join(' '))
    }
  }
}

main(`4
2 3 5
2 1 5
1 2 5
3 2 5`) // 2 2 6

main(`2
0 0 100
1 1 98`) // 0 0 100

main(`3
99 1 191
100 1 192
99 0 192`) // 100 0 193
