const shout_backwards = (data) => {
  let allcaps = data.toUpperCase()
  let splitting = allcaps.split('')
  let reversing = splitting.reverse()
  let backwards = reversing.join('')
  return backwards + '!!!'
}

console.log(shout_backwards('Hello World'))

class Word {
  constructor (word) {
    this.word = word
  }

  allcaps() {
    this.word = this.word.toUpperCase()
    return this
  }

  splitting() {
    this.word = this.word.split('')
    return this
  }

  reversing() {
    this.word = this.word.reverse()
    return this
  }

  backwards() {
    this.word = this.word.join('')
    return this
  }

  addsuffix() {
    this.word = this.word+"!!!"
    return this
  }

  print(){
    console.log(this.word)
  }

}

var word = new Word("Hello World")
// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const example = word
  .allcaps()
  .splitting()
  .reversing()
  .backwards()
  .addsuffix()
  .print()

// Alternatif penulisan:*/
//word.allcaps().splitting().reversing().backwards().addsuffix().print()
