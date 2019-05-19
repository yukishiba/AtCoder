// B - YYMM or MMYY 
// WA
'use strict'
function main(input) {
  input = input.trim()
  const a = Number(input.slice(0, 2))
  const b = Number(input.slice(2, 4))
  const text = ['YYMM','MMYY','AMBIGUOUS','NA']
  let result = ''

  if ((a === 0) || (b === 0) || ((a > 12) && (b > 12))) {
    result = text[3]
  } else if (a < 13) {
    if (b < 13) {
      result = text[2]
    } else {
      result = text[1]
    }
  } else {
    result = text[0]
  }
  console.log(input, a, b, result)
}

main(`1905`) // YYMM
main(`9901`) // YYMM

main(`0519`) // MMYY
main(`0113`) // MMYY
main(`0199`) // MMYY

main(`0112`) // AMBIGUOUS
main(`0101`) // AMBIGUOUS
main(`1212`) // AMBIGUOUS

main(`1700`) // NA
main(`1799`) // NA
main(`9999`) // NA
main(`0000`) // NA
main(`0001`) // NA
main(`1313`) // NA
