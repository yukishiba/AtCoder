// B - Algae
// xi+1=rxi−D
'use strict'
function main(input) {
  input = input.trim().split(' ')
  const r = Number(input[0])
  const D = Number(input[1])
  let ans = [Number(input[2])]

  for (let i = 1; i <= 10; i++) {
    ans[i] = r * ans[i - 1] - D
  }

  ans.shift()
  console.log(ans.join('\n'))
}

main(`2 10 20`)
/*
30
50
90
170
330
650
1290
2570
5130
10250
*/

main(`4 40 60`)
/*
200
760
3000
11960
47800
191160
764600
3058360
12233400
48933560
*/
