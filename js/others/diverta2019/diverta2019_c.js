// C - AB Substrings 

'use strict'
function main(input) {
  input = input.trim().split('\n')
  input.shift()
  let count = 0
  let firstB = 0
  let lastA = 0
  let bothAB = 0
  input.forEach(val => {
    let match = val.match(/AB/g)
    if (match) count += match.length
    let matchB = val.match(/^B/)
    let matchA = val.match(/A$/)
    if (matchB) firstB++
    if (matchA) lastA++
    if (matchA && matchB) bothAB++
  })
  let min = Math.min(lastA, firstB)
  if (lastA === firstB && lastA === bothAB && min > 0) min--
  console.log(count + min)
}

main(`3
ACB
ACBAC
AAC`) // 2

main(`3
ABCA
XBAZ
BAD`) // 2

main(`9
BEWPVCRWH
ZZNQYIJX
BAVREA
PA
HJMYITEOX
BCJHMRMNK
BP
QVFABZ
PRGKSPUNA`) // 4

main(`7
RABYBBE
JOZ
BMHQUVA
BPA
ISU
MCMABAOBHZ
SZMEHMA`) // 4
