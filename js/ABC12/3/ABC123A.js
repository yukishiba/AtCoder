// A - Five Antennas 

'use strict'
function main(input) {
  input = input.trim().split('\n')
  console.log(input[5] >= input[4] - input[0] ? 'Yay!' : ':(')
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
