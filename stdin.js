'use strict'
function main(input) {
  input = input.trim()
  for (let i = 1; i < input.length; i++) {
    if (input[i]===input[i-1]) return console.log('Bad')
  }
  console.log('Good')
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
