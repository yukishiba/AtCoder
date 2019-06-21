// B Collatz Problem

'use strict'
function main(input) {
  const func = n => n % 2 ? 3 * n + 1 : n / 2
  let a = [Number(input)]
  let i = 1
  while (i < 1000000) {
    let current = func(a[i - 1])
    if (a.indexOf(current) !== -1) break
    a.push(current)
    i++
  }
  console.log(a.length + 1)
}

main(`8`) // 5

main(`7`) // 18

main(`54`) // 114
