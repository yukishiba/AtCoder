// B - Minesweeper

'use strict'
function main(input) {
  input = input.trim().split('\n')
  let nums = input.shift().split(' ')
  input = input.map(row => {
    row = row.split('');
    return row.map(val => val === '.' ? 0 : val)
  })


  const targets = (i, j) => {
    return [
      [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
      [i, j - 1], [i, j + 1],
      [i + 1, j - 1], [i + 1, j], [i + 1, j + 1],
    ]
  }

  const add = (i, j) => {
    targets(i, j).forEach(t => {
      if (
        t[0] >= 0 && t[0] < Number(nums[0]) &&
        t[1] >= 0 && t[1] < Number(nums[1]) && 
        input[t[0]][t[1]] !== '#'
      ) { input[t[0]][t[1]]++ }
    })
  }

  for (let i = 0; i < Number(nums[0]); i++) {
    for (let j = 0; j < Number(nums[1]); j++) {
      if (input[i][j] === '#') add(i, j)
    }
  }

  input = input.map(row => row.join('')).join('\n')
  
  console.log(input)
}

main(`3 5
.....
.#.#.
.....`)
/*
11211
1#2#1
11211
*/

main(`3 5
#####
#####
#####`)
/*
#####
#####
#####
*/

main(`6 6
#####.
#.#.##
####.#
.#..#.
#.##..
#.#...`)
/*
#####3
#8#7##
####5#
4#65#2
#5##21
#4#310
*/