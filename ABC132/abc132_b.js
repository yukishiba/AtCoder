//  B - Ordinary Number 
'use strict'
function main(i) {
  i = i.trim().split('\n')
  const n = i[0] - 0
  i = i[1].split(' ').map(v => v - 0)

  let ans = 0
  for (let j = 1; j < n - 1; j++) {
    if (
      (i[j-1] < i[j] && i[j] < i[j+1]) ||
      (i[j+1] < i[j] && i[j] < i[j-1])) {
      ans++
    }
  }
  console.log(ans)
}

main(`5
1 3 5 4 2`) // 2

main(`9
9 6 3 2 5 8 7 4 1`) // 5