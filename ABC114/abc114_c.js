//  C - 755

'use strict'
function main(input) {
  input = Number(input.trim())
  const check = n => {
    n = String(n)
    return ~n.indexOf('7') && ~n.indexOf('5') && ~n.indexOf('3')
  }
  const dfs = n => {
    if (n === '' || Number(n) <= input) {
      let r = check(n) ? 1 : 0
      r += dfs(Number(n + '7'))
      r += dfs(Number(n + '5'))
      r += dfs(Number(n + '3'))
      return r
    } else {
      return 0
    }
  }
  console.log(dfs(''))
}

main(`575`) // 4

main(`3600`) // 13

main(`999999999`) // 26484
