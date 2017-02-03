const shout_backwards = (data) => {
  let backwards = data.toUpperCase().split('').reverse().join('')
  return backwards + '!!!'
}

console.log(shout_backwards('Hello World'))

class Word {
  constructor(word) {
    this.word = word
  }

  allcaps() {
    this.word = this.word.toUpperCase()
    return this
  }

  splitting(delimiter)
    this.word = this.word.split(delimiter)
    return this
  }

  reversing() {
    this.word = this.word.reverse()
    return this
  }

  backwards(delimiter) {
    this.word = this.word.join(delimiter)
    return this
  }

  addsuffix() {
    this.word = this.word + '!!!'
    return this
  }

  print() {
    console.log(this.word)
  }
}

const word = new Word('Danang Aji Tamtomo');
// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const example = word
  .allcaps()
  .splitting()
  .reversing()
  .backwards()
  .addsuffix()
  .print()

// Alternatif penulisan:
// word.allcaps().splitting().reversing().backwards().addsuffix().print()
