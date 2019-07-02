//  A - Fifty-Fifty 
'use strict'
function main(input) {
  input = input.trim().split('')
  let obj = {}
  for (let i = 0; i < 4; i++) {
    if (input[i] in obj) {
      obj[input[i]]++
    } else {
      obj[input[i]] = 1
    }
  }
  const ans = Object.keys(obj).length === 2 ? 'Yes' : 'No'
  console.log(ans)
}

main(`ASSA`) // Yes
main(`STOP`) // No
