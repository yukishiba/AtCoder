// C - Divide the Problems 

'use strict'
function main(i) {
  i = i.trim().split('\n')
  const n = i[0] - 0
  i = i[1].split(' ').map(v => v - 0).sort((a, b) => a - b)
  let c = Math.floor(n/2)-1
  console.log(i[c+1] - i[c])
}

main(`6
9 1 4 4 6 7`) // 2

main(`8
9 1 14 5 5 4 4 14`) // 0

main(`14
99592 10342 29105 78532 83018 11639 92015 77204 30914 21912 34519 80835 100000 1`) // 42685
