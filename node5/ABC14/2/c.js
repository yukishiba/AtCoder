'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  inp.shift()
  inp = inp[0].split(' ')
    .map((n, i) => [Number(n), i+1])
    .sort((a, b) => a[0] - b[0])
    .map(arr => arr[1])
  console.log(inp.join(' '))
}

main(`8
8 2 7 3 4 5 6 1`);
