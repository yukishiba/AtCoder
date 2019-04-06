'use strict'
function main(input) {
  input = removeDangerWord(input.trim())
  input = input.replace(/eraser?/g, '')
  input = input.replace(/dream(er)?/g, '')
  function removeDangerWord (input) {
    const dangerWord = /dreameraser?/g
    let wordLength = input.length
    let newWordLength = 0
    while (wordLength !== newWordLength) {
      wordLength = newWordLength
      input = input.replace(dangerWord, '')
      newWordLength = input.length
    }
    return input
  }

  console.log(input === '' ? 'YES' : 'NO')
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
