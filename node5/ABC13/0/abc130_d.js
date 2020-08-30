// D - Enough Array 
'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NK = input.shift().split(' ').map(v => v - 0)
  input = input[0].split(' ')

  let arr = [0]
  let ans = 0
  let prev = 0
  for (let i = 1; i <= NK[0]; i++) {
    arr[i] = arr[i-1] + Number(input[i-1])
    if (arr[i] >= NK[1]) {
      for (let j = prev; j <= NK[0]; j++) {
        if (arr[i] - arr[j] < NK[1]) {
          ans += j
          prev = j - 1
          break;
        }
      }
    }
  }
  console.log(ans)
}

main(`4 10
6 1 2 7`) // 2

main(`3 5
3 3 3`) // 3

main(`10 53462
103 35322 232 342 21099 90000 18843 9010 35221 19352`) // 36

