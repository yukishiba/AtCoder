// A - Five Antennas 

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const distance = input.pop()
  input = input.map((val, index) => {
    let result = true
    for (let i = index; i < input.length; i++) {
      if (result) {
        result = input[i] - val <= distance
      }
    }
    return result
  })

  console.log(input.filter(result => result === false).length === 0 ? 'Yay!' : ':(')
}

main(`1
2
4
8
9
15`) //Yay!


main(`15
18
26
35
36
18`) //:(
