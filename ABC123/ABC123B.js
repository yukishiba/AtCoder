// B - Five Dishes 

'use strict'
function main(input) {
  input = input.trim().split('\n')
  
  input = input
    .map((val, index) => {
      let fp = Number(val.slice(-1)) || 10
      return {
        index: index,
        val: Number(val),
        sort: fp,
        time: 10 - fp + Number(val)
      }
    })
    .sort((a, b) => a.sort < b.sort)
    .reduce((prev, current, index) => {
      let time = index !== input.length - 1 ? current.time : current.val
      return prev + time
    }, 0)
    
  console.log(input)
}

main(`29
20
7
35
120`) //215

main(`101
86
119
108
57`) // 481

main(`123
123
123
123
123`) // 643
