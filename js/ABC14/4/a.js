'use strict'
function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  if ((inp[0] < 10 && inp[0] > 0) && (inp[1] < 10 && inp[1] > 0)) {
    console.log(inp[0] * inp[1])
  } else {
    console.log(-1)
  }
}
main('9 9');
