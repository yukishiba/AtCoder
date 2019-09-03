// C - Exception Handling 

'use strict'
function main(i) {
  i = i.trim().split('\n').map(n => Number(n))
  const N = i.shift()
  const j = [...i].sort((a, b) => b - a)
  console.log(i.map(n => n === j[0] ? j[1] : j[0]).join('\n'))
}

main(`3
1
4
3`) 

/*
4
3
4
*/

main(`2
5
5`)

/*
5
5
*/