// B Foods Loved by Everyone

'use strict'
function main(input) {
  input = input.split('\n')
  const config = input.shift().split(' ')
  input = input.map(row => row.slice(1) + ' ')
  let count = 0
  for (let i = 1; i <= config[1]; i++) {
    let temp = input.filter(row => row.indexOf(' ' + i + ' ') !== -1)
    if (temp.length === Number(config[0])) count++
  }
  console.log(count)
}

main(`3 4
2 1 3
3 1 2 3
2 3 2`) //1

main(`5 5
4 2 3 4 5
4 1 3 4 5
4 1 2 4 5
4 1 2 3 5
4 1 2 3 4`) // 0

main(`1 30
3 5 10 30`) //3
