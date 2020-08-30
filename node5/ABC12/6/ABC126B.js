// B - YYMM or MMYY 
// FIX 2019/05/20
'use strict'
function main(input) {
  input = input.trim()
  const a = Number(input.slice(0, 2))
  const b = Number(input.slice(2, 4))
  const text = ['YYMM','MMYY','AMBIGUOUS','NA']
  const isMonth = num => ((0 < num) && (num < 13))
  const am = isMonth(a)
  const bm = isMonth(b)
  let result = ''

  if (am && bm) {
    result = text[2]
  } else if (am) {
    result = text[1]
  } else if (bm) {
    result = text[0]
  } else {
    result = text[3]
  }
  console.log(result)
}

main(`1905`) // YYMM
main(`9901`) // YYMM
main(`0001`) // YYMM`

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
main(`1313`) // NA
