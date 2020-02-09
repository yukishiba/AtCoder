'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const name = inp[0].split(' ')
  const num = inp[1].split(' ')
  const poi = inp[2]
  num[name.indexOf(poi)]--
  console.log(num.join(' '))
}

main(`red blue
5 5
blue

`)
