// 1 以上 N 以下の整数のうち、
// 10 進法での各桁の和が A 以上 B 以下であるものの総和を求めてください。
'use strict'
function main(input) {
  input = input.split(' ').map(num => Number(num))
  let result = 0
  
  const hani = num => input[1] <= num && num <= input[2]
  const wa = num => {
    return String(num).split('').reduce((prev, current) => prev + Number(current), 0)
  }

  for (let i = 1; i <= input[0]; i++) {
    let sum = wa(i)
    if (hani(sum)) result += i
  }

  console.log(result)
}

main(`20 2 5`) // 84

main(`10 1 2`) // 13

main(`100 4 16`) // 4554