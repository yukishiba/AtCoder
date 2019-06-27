// C - ID

'use strict'
function main(input) {
  input = input.trim().split('\n')
  input.shift()
  let count = []
  let aMap = new Map
  input = input
    .map(c => {
      let arr = c.split(' ').map(w => w - 0)
      if (count[arr[0]] === undefined) count[arr[0]] = []
      count[arr[0]].push(arr[1])
      aMap.set(arr[1], '')
    })
  count.forEach((v, i) => {
    v.sort((a, b) => a - b)
    v.forEach((y, j) => {
      let id = ('000000' + i).slice(-6)
      id += ('000000' + (j+1)).slice(-6)
      aMap.set(y, id)
    })
  })
  aMap.forEach(v => console.log(v))
}

main(`2 3
1 32
2 63
1 12`)
/*
000001000002
000002000001
000001000001
*/
console.log('---')
main(`2 3
2 55
2 77
2 99`)
/*
000002000001
000002000002
000002000003
*/