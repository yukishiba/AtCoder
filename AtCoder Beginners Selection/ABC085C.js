// 日本でよく使われる紙幣は、10000 円札、5000 円札、1000 円札です。
// 以下、「お札」とはこれらのみを指します。
// 青橋くんが言うには、彼が祖父から受け取ったお年玉袋にはお札が N 枚入っていて、
// 合計で Y 円だったそうですが、嘘かもしれません。このような状況がありうるか判定し、
// ありうる場合はお年玉袋の中身の候補を一つ見つけてください。
// なお、彼の祖父は十分裕福であり、お年玉袋は十分大きかったものとします。

'use strict'
function main(input) {
  const type = [10000, 5000, 1000]
  let result = []

  function calc (money, num, index, count) {
    let maxCount = Math.min(Math.floor(money / type[index]), num)
    let remainMoney
    let remainNum
    let payloadCount
    if (maxCount > 0) {
      for (let i = maxCount; i >= 0; i--) {
        console.log(index, i)
        remainMoney = money - (type[index] * i)
        remainNum = num - i
        payloadCount = [...count]
        payloadCount[index] = i
        console.log('remain', payloadCount, remainMoney, remainNum, index)
        if (remainNum === 0) {
          return {money: remainMoney, num: remainNum, count: payloadCount}
        }
        let result = calc(remainMoney, remainNum, index + 1, payloadCount)
        console.log('result', result.count, result.money, result.num, index + 1)
        if (result.money === 0 && result.num === 0) {
          return result
        }
      }
    }
    return {money: -1, num: -1, count: [-1, -1, -1]}
  }
  
  input = input.split(' ')
  let num = input.shift()
  let amount = input.shift()
  
  console.log(calc(amount, num, 0, [0, 0, 0]))
  // console.log((num===0 && total===0) ? result.join(' ') : '-1 -1 -1')
}

main('9 45000') // 4 0 5
main('20 196000') // -1 -1 -1
main('1000 1234000') // 14 27 959
// main('2000 20000000') // 2000 0 0