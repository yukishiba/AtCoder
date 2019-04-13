// D - Handstand

// WA, TLE

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const k = input[0].split(' ')[1]
  let s = input[1].split('')
  let temp = []
  let current = s.shift()
 
  s.forEach(val => {
    if (val === current[0]) {
      current += val 
    } else {
      temp.push(current)
      current = val
    }
  })
  temp.push(current)
  if (temp[0][0] === '0') temp.unshift('')
  if (temp[temp.length-1][0] === '0') temp.push('')
 
  for (let i = 0; i < k; i++) {
    let max = 0
    let maxIndex = ''
    for (let j = 0; j < temp.length - 2; j+=2) {
      let current = temp[j] + temp[j+1] + temp[j+2]
      if (max <= current.length) {
        max = current.length
        maxIndex = j
      }
    }
    if (maxIndex !== '') {
      if (temp.length > maxIndex+1) {
        let rep = temp[maxIndex+1].replace(/0/g, '1')
        temp[maxIndex] += rep
        temp.splice(maxIndex+1, 1)
      }
      if (temp.length > maxIndex+1) {
        temp[maxIndex] += temp[maxIndex+1]
        temp.splice(maxIndex+1, 1)
      }
    }
  }
  console.log(temp.filter(val => val[0] === '1').sort((a, b) => b.length - a.length)[0].length)
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
