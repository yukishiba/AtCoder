'use strict'
function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  console.log(inp[0]+inp[1]+inp[2] > 21 ? 'bust' : 'win')
}
main(`13 7 2
`);
