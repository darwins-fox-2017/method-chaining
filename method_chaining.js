const shout_backwards = (data) => {
  let allcaps = data.toUpperCase()
  let splitting = allcaps.split('')
  let reversing = splitting.reverse()
  let backwards = reversing.join('')
  return backwards + '!!!'
}

console.log(shout_backwards('Hello World'))
class wordChange {
  constructor(word) {
    this.word=word;
  }
  allcaps(){
    var wordcaps=this.word.toUpperCase();
    this.word=wordcaps;
    return this
  }
  splitting(){
    var wordsplit=this.word.split('')
    this.word=wordsplit;
    return this;
  }
  reversing(){
    let wordrev=this.word.reverse();
    this.word=wordrev;
    return this;
  }
  backwards(){
    let wordjoin=this.word.join('')
    this.word=wordjoin;
    return this
  }
  addsuffix(){
     let wordadd=this.word=this.word + ' !!!'
     this.word=wordadd;
    return this;
  }
  print(){
    console.log(this.word);
  }
}
let word=new wordChange('Hello World');
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
