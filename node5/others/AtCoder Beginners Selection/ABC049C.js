// 英小文字からなる文字列 S が与えられます。 Tが空文字列である状態から始め、以下の操作を好きな回数繰り返すことで S=T とすることができるか判定してください。

'use strict'
function main(input) {
  console.log(input.trim().replace(/^(dream(er)?|eraser?)*$/, '') === '' ? 'YES' : 'NO')
}

main('erasedream') // YES
main('dreameraser') // YES
main('dreamerer') // NO
main('dreamereraser') // YES
main('dreamerdreamerdreamerdreamdreamererasedreamereraserdreamdreamerdreamdreamdreamerasedreamerasererasedreamererasedreameraseeraseeraseerasereraserdreamereraserdreamerasereraseerasereraser') // YES

/*
dreamer dreamer
dreamer dream
dreamer erase
dreamer eraser
dream dreamer
dream dream
dream erase
dream eraser
erase dreamer
erase dream
erase erase
erase eraser
eraser dreamer
eraser dream
eraser erase
eraser eraser
*/