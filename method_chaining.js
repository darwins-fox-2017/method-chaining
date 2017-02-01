'use strict'

const shout_backwards = (data) => {
  let allcaps = data.toUpperCase()
  let splitting = allcaps.split('')
  let reversing = splitting.reverse()
  let backwards = reversing.join('')
  return backwards + '!!!'
}

const methodChaining = (word) => {
  return word.toUpperCase().split('').reverse().join('')
}

console.log(shout_backwards('Hello World'))
console.log(methodChaining('Hello World'))

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
// const example = shout_backwards(word)
//   .allcaps()
//   .splitting()
//   .reversing()
//   .backwards()
//   .addsuffix()
//   .print()

// Alternatif penulisan:
// word.allcaps().splitting().reversing().backwards().addsuffix().print()
