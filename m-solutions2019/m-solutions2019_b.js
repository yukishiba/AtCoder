// B - Sumo
'use strict'
function main(input) {
  input = input.trim().split('')
  const current = input.length
  const win = input.filter(v => v==='o').length
  console.log((win + (15 - current) >= 8) ? 'YES' : 'NO')
}

main(`oxoxoxoxoxoxox`)

main(`xxxxxxxx`)
