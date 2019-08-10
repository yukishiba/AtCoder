// B - One Clue

'use strict'
function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  let arr = []
  for (let i = inp[1] - inp[0] + 1; i <= inp[1] + inp[0] - 1; i++) {
    arr.push(i)
  }
  console.log(arr.join(' '))
}


main(`3 7`) // 5 6 7 8 9

main(`4 0`) // -3 -2 -1 0 1 2 3

main(`1 100`) // 100

