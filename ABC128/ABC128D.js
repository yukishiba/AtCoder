// D - equeue
// TLE!!!!

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NK = input.shift().split(' ').map(val => Number(val))
  input = input[0].split(' ').map(val => Number(val))
  let mine = []

  const reduce = arr => {
    if (arr.length) {
      return arr.reduce((p, c) => p + c, 0)
    }
    return 0
  }

  const choose = (input, mine, K) => {
    let ans = [reduce(mine)]
    let i = input.length ? [...input] : []
    let m = mine.length ? [...mine] : []
    if (input.length) {
      ans.push(A(i, m, K))
      ans.push(B(i, m, K))
    }
    if (mine.length) {
      ans.push(C(i, m, K))
      ans.push(D(i, m, K))
    }
    return Math.max(...ans.filter(val => typeof val === 'number'))
  }

  const A = (input, mine, K) => {
    let i = input.length ? [...input] : []
    let m = mine.length ? [...mine] : []
    m.push(i.shift())
    m = m.sort((a, b) => a - b)
    K--
    return (K > 0) ? choose(i, m, K) : reduce(m)
  }
  const B = (input, mine, K) => {
    let i = input.length ? [...input] : []
    let m = mine.length ? [...mine] : []
    m.push(i.pop())
    m = m.sort((a, b) => a - b)
    K--
    return (K > 0) ? choose(i, m, K) : reduce(m)
  }
  const C = (input, mine, K) => {
    let i = input.length ? [...input] : []
    let m = mine.length ? [...mine] : []
    i.push(m.shift())
    K--
    return (K > 0) ? choose(i, m, K) : reduce(m)
  }
  const D = (input, mine, K) => {
    let i = input.length ? [...input] : []
    let m = mine.length ? [...mine] : []
    i.unshift(m.shift())
    K--
    return (K > 0) ? choose(i, m, K) : reduce(m)
  }
  
  console.log(choose(input, mine, NK[1]))
}

main(`6 4
-10 8 2 1 2 6`) // 14

main(`6 4
-6 -100 50 -2 -5 -3`) // 44

main(`6 3
-6 -100 50 -2 -5 -3`) // 0
