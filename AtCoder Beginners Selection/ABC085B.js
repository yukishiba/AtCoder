// X 段重ねの鏡餅 (X≥1) とは、X 枚の円形の餅を縦に積み重ねたものであって、
// どの餅もその真下の餅より直径が小さい（一番下の餅を除く）もののことです。
// 例えば、直径 10、8、6 センチメートルの餅をこの順に下から積み重ねると 3 段重ねの鏡餅になり、
// 餅を一枚だけ置くと1段重ねの鏡餅になります。

// ダックスフンドのルンルンは N枚の円形の餅を持っていて、そのうち i 枚目の餅の直径は di センチメートルです。
// これらの餅のうち一部または全部を使って鏡餅を作るとき、最大で何段重ねの鏡餅を作ることができるでしょうか。
'use strict'
function main(input) {
  input = input.split('\n')
  let count = input.shift()
  let result = []

  for (let i = 0; i < count; i++) {
    if (result.indexOf(input[i])===-1) result.push(input[i])
  }

  console.log(result.length)
}

main(`4
10
8
8
6`) // 3

main(`3
15
15
15`) // 1

main(`7
50
30
50
100
50
80
30`) // 4