// B - Guidebook
'use strict'
function main(input) {
  input = input.trim().split('\n')
  const N = Number(input.shift())
  input = input.map((val, i) => [i+1, ...val.split(' ')])
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return Number(b[2] - a[2])
      } else if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
    }).map(arr => arr[0])

  console.log(input.join('\n'))
}

main(`6
khabarovsk 20
moscow 10
kazan 50
kazan 35
moscow 60
khabarovsk 40`)
/*
3
4
6
1
5
2
*/

main(`10
yakutsk 10
yakutsk 20
yakutsk 30
yakutsk 40
yakutsk 50
yakutsk 60
yakutsk 70
yakutsk 80
yakutsk 90
yakutsk 100`)
/*
10
9
8
7
6
5
4
3
2
1
*/
