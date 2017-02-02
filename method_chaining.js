const shout_backwards = (data) => {
  let allcaps = data.toUpperCase()
  let splitting = allcaps.split('')
  let reversing = splitting.reverse()
  let backwards = reversing.join('')
  return backwards + '!!!'
}

console.log(shout_backwards('Hello World'))

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya

class Chaining {
  constructor(input) {
    this.input  = input
  }
  allcaps(){
    this.input = this.input.toUpperCase()
    return this
  }
  splitting(){
    this.input = this.input.split('')
    return this
  }
  reversing(){
    this.input.reverse()
    return this
  }
  backwards(){
    this.input = this.input.join('|')
    return this
  }
  addsuffix(){
    this.input += '!!!'
    return this
  }
  print(){
    console.log(this.input);
  }
}

let word = new Chaining('Hello world')

const example = word
  .allcaps()
  .splitting()
  .reversing()
  .backwards()
  .addsuffix()
  .print()

// Alternatif penulisan:
// word.allcaps().splitting().reversing().backwards().addsuffix().print()
