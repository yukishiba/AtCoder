// N 枚のカードがあります. i 枚目のカードには, ai という数が書かれています.
// Alice と Bob は, これらのカードを使ってゲームを行います.
// ゲームでは, Alice と Bob が交互に 1 枚ずつカードを取っていきます. Alice が先にカードを取ります.
// 2 人がすべてのカードを取ったときゲームは終了し, 取ったカードの数の合計がその人の得点になります.
// 2 人とも自分の得点を最大化するように最適な戦略を取った時, Alice は Bob より何点多く取るか求めてください.
'use strict'
function main(input) {
  let result = [0, 0]

  input = input.split('\n')[1].split(' ')
    .map(input => Number(input))
    .sort((a, b) => b - a).forEach((val, index) => {
      result[index % 2] += val
    })

  console.log(result[0] - result[1])
}

main(`2
3 1`) // 2

main(`3
2 7 4`) // 5

main(`4
20 18 2 18`) // 18