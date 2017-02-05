const shout_backwards = (data) => {
  return data.toUpperCase().split('').reverse().join('') + '!!!'
}

console.log(shout_backwards('Hello World'))

class Chaining {
  constructor (string) {
    this.string = string
  }

  allcaps() {
    this.string = this.string.toUpperCase()
    return this
  }

  splitting() {
    this.string = this.string.split('')
    return this
  }

  reversing() {
    this.string = this.string.reverse()
    return this
  }

  backwards() {
    this.string = this.string.join('')
    return this
  }

  addsuffix() {
    this.string += "!!!!!!!!!!!"
    return this
  }

  print() {
    console.log(this.string);
  }
}
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
let word = new Chaining('Hello world')
word.allcaps().splitting().reversing().backwards().addsuffix().print()
