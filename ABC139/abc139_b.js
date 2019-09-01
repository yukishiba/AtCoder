// B - Power Socket 

'use strict'
function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  if (inp[1]===1) {
    console.log(0)
  } else if (inp[1]>inp[0]) {
    inp[1] -= inp[0]
    console.log(Math.ceil(inp[1] / (inp[0] - 1) + 1))
  } else {
    console.log(1)
  }
}


main(`4 1`) 
main(`8 9`) 
main(`8 8`) 