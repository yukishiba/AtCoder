//  B - Template Matching 
// 2103

'use strict'
function main(input) {
  input = input.trim().split('\n')
  let size = input.shift().split(' ').map(val => Number(val))
  let sizeDiff = size[0] - size[1]
  let N = []
  let M = []
  let result = 0

  for (let i = 0; i < size[0]; i++) {
    N.push(input.shift())
  }
  for (let i = 0; i < size[1]; i++) {
    M.push(input.shift())
  }

  for (let i = 0; i <= sizeDiff; i++) {
    while (result !== -1) {
      result = N[i].indexOf(M[0], result)
      if (result !== -1) {
        let check = true
        for (let j = 1; j < size[1]; j++) {
          if (check) {
            check = N[i+j].indexOf(M[j], result) === result
          }
        }
        if (check) {
          console.log('Yes')
          return
        }
      }
      if (result !== -1) result++
    }
    result = 0
  }
  console.log('No')
}

main(`3 2
#.#
.#.
#.#
#.
.#`) // Yes

main(`9 7
#.##.##.#
.#..#..#.
#.##.##.#
#.##.##.#
.#..#..#.
#.##.##.#
#.##.##.#
.#..#..#.
#.##.##.#
#..#..#
.##.##.
.##.##.
#..#..#
.##.##.
.##.##.
#..#..#`) // Yes

main(`4 1
....
....
....
....
#`) // No
