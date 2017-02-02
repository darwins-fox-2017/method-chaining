const shout_backwards = (data) => {
  // let allcaps = data.toUpperCase()
  // let splitting = allcaps.split('')
  // let reversing = splitting.reverse()
  // let backwards = reversing.join('')
  return data.toUpperCase().split('').reverse().join('') + '!!!'
}

console.log(shout_backwards('Hello World'))

// -----------------------------------------------------------------------------

class Sentence {
  constructor(word){
    this.word = word
  }

  allcaps() {
    this.word = this.word.toUpperCase()
    return word
  }

  splitting() {
    this.word = this.word.split('')
    return word
  }

  reversing() {
    this.word = this.word.reverse()
    return word
  }

  backwards() {
    this.word = this.word.join('')
    return word
  }

  addsuffix() {
    this.word = this.word + '!!!'
    return word
  }

  print() {
    console.log(this.word)
  }
}

var word = new Sentence("Hello World")
// Kode di bawah ini merupakan driver code, jangan diubah ya
// const example = word
//   .allcaps()
//   .splitting()
//   .reversing()
//   .backwards()
//   .addsuffix()
//   .print()

// Alternatif penulisan:
word.allcaps().splitting().reversing().backwards().addsuffix().print()
