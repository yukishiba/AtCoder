// A - On the Way

'use strict'
function main(input) {
  input = input.trim().split(' ')
  const start = Math.min(Number(input[0]), Number(input[1]))
  const goal = Math.max(Number(input[0]), Number(input[1]))
  const result = start < Number(input[2]) && Number(input[2]) < goal
  console.log(result ? 'Yes' : 'No')
}

main(`3 8 5`) // Yes

main(`7 3 1`) // No

main(`10 2 4`) // Yes

main(`31 41 59`) // No
