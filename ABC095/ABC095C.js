// C - Half and Half 
'use strict'
function main(input) {
  input = input.trim().split(' ')
  const a = Number(input.shift())
  const b = Number(input.shift())
  const c = Number(input.shift())
  const x = Number(input.shift())
  const y = Number(input.shift())

  let ans = 0
  
  const both = Math.min(x, y);
  ans += both * ((a + b < c * 2) ? (a + b) : c * 2)

  if (y === both) {
    ans += (x - both) * ((a > c * 2) ? c * 2 : a)
  } else {
    ans += (y - both) * ((b > c * 2) ? c * 2 : b)
  }

  console.log(ans)
}

main(`1500 2000 1600 3 2`) // 7900

main(`1500 2000 1900 3 2`) // 8500

main(`1500 2000 500 90000 100000`) // 100000000