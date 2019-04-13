// D - Handstand

// WA, TLE

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const k = input[0].split(' ')[1]
  let s = input[1].split('')
  let nums = []
  let current = s.shift()
  if (current === '0') nums.push(0)
 
  s.forEach(val => {
    if (val === current[0]) {
      current += val 
    } else {
      nums.push(current.length)
      current = val
    }
  })
  nums.push(current.length)
  if(nums.length % 2 === 0) nums.push(0)

  let add = 2 * k + 1
  let ans = 0

  let left = 0
  let right = 0
  let tmp = 0

  for (let i = 0; i < nums.length; i += 2) {
    while (i > left) {
      tmp -= nums[left]
      left++
    }
    while (Math.min(i + add, nums.length) > right) {
      tmp += nums[right]
      right++
    }
    ans = Math.max(tmp, ans)
  }
  console.log(ans)
}

main(`5 1
00010`) // 4

main(`14 2
11101010110011`) // 8

main(`2 1
10`) // 2

main(`2 1
01`) // 2

main(`1 1
1`) // 1
