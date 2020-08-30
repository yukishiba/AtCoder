// B - Bite Eating
'use strict'
function main(i) {
  i = i.trim().split(' ').map(v => Number(v))
  let sum = (((1 + i[0]) / 2) + i[1] - 1) * i[0]
  if (!(i[1] <= 0 && i[0]+i[1]-1 > 0)) {
    sum -= (i[1] > 0) ? i[1] : i[1] + i[0] - 1
  }
  console.log(sum)
}

main(`5 2`) // 18

main(`3 -1`) // 0

main(`30 -50`) // -1044
