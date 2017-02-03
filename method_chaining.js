"use strict"
const shout_backwards = (data) => {
  let allcaps = data.toUpperCase()
  let splitting = allcaps.split('')
  let reversing = splitting.reverse()
  let backwards = reversing.join('')
  return backwards + '!!!'
}

console.log(shout_backwards('Hello World'))

class stringManipulation {
  constructor(string) {
    this.string = string
  }

  allcaps(){
    this.string = this.string.toUpperCase()
    return this
  }

  splitting(){
    this.string = this.string.split('')
    return this
  }

  reversing(){
    this.string = this.string.reverse()
    return this
  }

  joining(){
    this.string = this.string.join('')
    return this
  }

  addsuffix(){
    this.string += '!!!'
    return this
  }

  display(){
    return this.string
  }
}

let string = 'diky arga'

let stringManipulation1 = new stringManipulation(string)
console.log(stringManipulation1.allcaps().splitting().reversing().joining().addsuffix().display());
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
