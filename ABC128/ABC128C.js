// C - Switches 
// 解説を読んでの実装

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NM = input.shift().split(' ').map(val => Number(val))
  const P = input.pop().split(' ').map(val => Number(val))
  input = input.map(val => val.split(' ').slice(1).map(v => Number(v)))

  const isOn = (sw, state) => {
    sw = Math.pow(2, sw - 1)
    return (sw & state) === sw
  }

  let count = 0
  for (let i = 0; i < Math.pow(2, NM[0]); i++) {
    let light = 0
    for (let j = 0; j < NM[1]; j++) {
      let swCount = 0
      input[j].forEach(sw => {
        if (isOn(sw, i)) swCount++
      })
      if (swCount % 2 === P[j]) light++
    }
    if (light === NM[1]) count++
  }

  console.log(count)
}

main(`2 2
2 1 2
1 2
0 1`) // 1

main(`2 3
2 1 2
1 1
1 2
0 0 1`) // 0

main(`5 2
3 1 2 5
2 2 3
1 0`) // 8
