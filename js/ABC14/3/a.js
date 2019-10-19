'use strict'
function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  if (inp[0] < inp[1] * 2) {
    console.log(0)
  } else {
    console.log(inp[0] - inp[1] * 2)
  }
}

main(`20 15
`);
