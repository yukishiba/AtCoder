// C - Unification 

'use strict'
function main(input) {
  input = input.trim()
  let stack = [input[0]]
  let count = 0
  for (let i = 1; i < input.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] != input[i]) {
      stack.pop()
      count += 2
    } else {
      stack.push(input[i])
    }
  }
  console.log(count)
}

main(`0011`) // 4

main(`11011010001011`) // 12

main(`0`) // 0