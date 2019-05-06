// C - GCD on Blackboard

'use strict'
function main(input) {
  input = input.split('\n')
  const length = Number(input[0])
  input = input[1].split(' ')

  const gcd = (a, b) => {
    if (b === 0) return a
    return gcd(b, a % b)
  }

  const l = [0]
  const r = []
  r[length - 1] = 0

  for (let i = 1; i < length; i++) {
    l[i] = gcd(l[i-1], Number(input[i-1]))
  }

  for (let i = length - 1; i > 0; i--) {
    r[i-1] = gcd(r[i], Number(input[i]))
  }
  
  const result = []
  for (let i = 0; i < length; i++) {
    result[i] = gcd(l[i], r[i])
  }

  console.log(Math.max(...result))
}

main(`3
7 6 8`) // 2

main(`3
5 6 8`) // 2

main(`3
4 6 13`) // 2

main(`3
12 15 18`) // 6

main(`2
1000000000 1000000000`) // 1000000000
