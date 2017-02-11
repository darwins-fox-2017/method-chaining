'use strict'

// const shout_backwards = (data) => {
//   let allcaps = data.toUpperCase()
//   let splitting = allcaps.split('')
//   let reversing = splitting.reverse()
//   let backwards = reversing.join('')
//   return backwards + '!!!'
// }

class shout_backwards {
  constructor(word) {
    this.words = word;
  }
  allcaps() {
    this.words = this.words.toUpperCase();
    return this
  }
  splitting(x) {
    this.words = this.words.split(x)
    return this
  }
  reversing() {
    this.words = this.words.reverse()
    return this
  }
  backwards(x) {
    this.words = this.words.join(x)
    return this
  }
  printerr() {
    console.log(this.words, "!!!")
  }
}

let shoutBack = new shout_backwards('Hello World')
shoutBack.allcaps().printerr()

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
// const example = word
//   .allcaps()
//   .splitting()
//   .reversing()
//   .backwards()
//   .addsuffix()
//   .print()

// Alternatif penulisan:
// word.allcaps().splitting().reversing().backwards().addsuffix().print()
