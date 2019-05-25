// D - Integer Cards
'use strict'
function main(input) {
  input = input.trim().split('\n')
  input.shift()
  const cards = input.shift().split(' ')
    .map(val => Number(val)).sort((a, b) => a - b)
  input = input.map(val => val.split(' ').map(val => Number(val)))
    .sort((a, b) => b[1] - a[1])
  
  let start = 0;
  for (let i = 0; i < input.length; i++) {
    let count = input[i][0]
    for (let j = start; j < cards.length; j++) {
      if (cards[j] < input[i][1]) {
        cards[j] = input[i][1]
        count--;
        start = j + 1
        if (count === 0) break;
      } else {
        break;
      }
    }
  }
  console.log(cards.reduce((p, c) => p + c))
}

main(`3 2
5 1 4
2 3
1 5`) // 14

main(`110 3
1 8 5 7 100 4 52 33 13 5
3 10
4 30
1 4`) // 338

main(`3 2
100 100 100
3 99
3 99`) // 300

main(`11 3
1 1 1 1 1 1 1 1 1 1 1
3 1000000000
4 1000000000
3 1000000000`) // 10000000001
