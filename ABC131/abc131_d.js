// D - Megalomania

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const N = Number(input.shift())
  input = input.map(row => row.split(' ').map(n => n - 0)).sort((a, b) => a[1] - b[1])

  let done = 0
  for (let i = 0; i < N; i++) {
    done += input[i][0]
    if (done > input[i][1]) return console.log('No')
  }
  console.log('Yes')
}

main(`5
2 4
1 9
1 8
4 9
3 12`) // Yes

main(`3
334 1000
334 1000
334 1000`) // No

main(`30
384 8895
1725 9791
170 1024
4 11105
2 6
578 1815
702 3352
143 5141
1420 6980
24 1602
849 999
76 7586
85 5570
444 4991
719 11090
470 10708
1137 4547
455 9003
110 9901
15 8578
368 3692
104 1286
3 4
366 12143
7 6649
610 2374
152 7324
4 7042
292 11386
334 5720`) // Yes
