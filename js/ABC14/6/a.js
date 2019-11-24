'use strict'
function main(inp) {
  inp = inp.trim()
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  let idx = days.indexOf(inp)
  console.log(7 - idx)
}
main('SUN');
