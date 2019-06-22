// A - Security
'use strict'
function main(input) {
  input = input.trim()
  for (let i = 1; i < input.length; i++) {
    if (input[i]===input[i-1]) return console.log('Bad')
  }
  console.log('Good')
}

main(`3776`) // 3.000000 0

main(`2121`) // 2.000000 1
