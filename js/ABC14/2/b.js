'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const NK = inp.shift().split(' ').map(n => Number(n))
  inp = inp[0].split(' ').map(n => Number(n))
    .filter(n => n >= NK[1])
  console.log(inp.length)
}

main(`1 500
499`);
