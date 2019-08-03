// C - Remainder Minimization 2019

'use strict'
function main(i) {
  i = i.trim().split(' ')
  const Y = 2019
  const R = Number(i[1])
  const L = Number(i[0])
  let ans = Y - 1;

  if (L * R > Y){
    if (R - L < Y) {
      const LY = L % Y;
      const RY = R % Y;

      for(let i = LY; i < RY; i++){
        for(let j = i + 1; j <= RY; j++){
          let n = (i * j) % Y
          if (n < ans) ans = n
          if (ans === 0) break
        }
        if (ans === 0) break
      }
	    console.log(ans);
    } else {
      console.log(0);
    }
  } else {
    console.log(L * (L+1));
  }
}

main(`2019 2020`) // 0

main(`2020 2040`) // 2

main(`4 2018`) // 0

main(`4 5`) // 20