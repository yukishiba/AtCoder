// A - Red or Not 

'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const a = Number(inp[0])
  const s = inp[1]
  console.log(a >= 3200 ? s : 'red')
}

main(`3200
pink`)

// main(``)

// main(``)
