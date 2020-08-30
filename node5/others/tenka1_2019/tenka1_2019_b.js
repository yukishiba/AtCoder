// B - *e**** ********e* *e****e* ****e**

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const num = input[2]
  let text = input[1]
  const char = new RegExp(`[^${text[num-1]}]`, 'g')
  text = text.replace(char, '*');
  console.log(text)
}

main(`5
error
2`) // *rr*r

main(`6
eleven
5`) // e*e*e*

main(`9
education
7`) // ******i**
