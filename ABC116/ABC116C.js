// C Grand Garden

'use strict'
function main(input) {
  input = input.trim().split('\n')[1].split(' ').map(val => Number(val))
  const length = input.length
  const sorted = [...input].sort((a, b) => b - a)
  let ans = 0

  sorted.forEach((cur, i) => {
    let count = 0
    const diff = cur - (i === length - 1 ? 0 : sorted[i + 1])
    if (diff) {
      let newArray = []
      input.forEach((val, j) => {
        if (val === cur) {
          if (!(j && input[j - 1] === val)) {
            count++
          }
          newArray.push(val - diff)
        } else {
          newArray.push(val)
        }
      })
      ans += count * diff
      input = [...newArray]
    }
  })
  console.log(ans)
}

main(`5
0 2 3 4 1 1`) // 4

main(`4
0 100 0 100 0 100`) // 300

main(`4
1 2 2 1`) // 2

main(`5
3 1 2 3 1`) // 5

main(`8
4 23 75 0 23 96 50 100`) // 221
