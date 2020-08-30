'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  if (inp[0] === inp[1]) {
    return console.log('same')
  } else if (inp[0].toLowerCase() === inp[1].toLowerCase()) {
    return console.log('case-insensitive')
  } else {
    return console.log('different')
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
