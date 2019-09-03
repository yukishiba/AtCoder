// C 	Stones

'use strict'
function main(input) {
  let result = input.trim().split('\n')[1].match(/(\#+\.+)+/)
  const white = result ? result[0].split('.').length - 1 : 0
  const black = result ? result[0].length - white : 0
  console.log(Math.min(white, black))
}

main(`3
#.#`) // 1

main(`5
#.##.`) // 2

main(`9
.........
`) // 0

main(`11
#####.....#
`) // 5

main(`11
##........#
`) // 2

main(`19
.....#..#.#.#.#.#.#
`)
