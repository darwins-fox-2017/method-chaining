// const shout_backwards = (data) => {
//   let allcaps = data.toUpperCase()
//   let splitting = allcaps.split('')
//   let reversing = splitting.reverse()
//   let backwards = reversing.join('')
//   return backwards + '!!!'
// }

// console.log(shout_backwards('Hello World'))

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
class Bersambung {
  constructor(name) {
    this.nama = name;
  }

  allcaps() {
    this.nama = this.nama.toUpperCase(); 
    return this
  }

  splitting() {
    this.nama = this.nama.split("");
    return this
  }

  reversing() {
    this.nama = this.nama.reverse();
    return this
  }

  backwards() {
    this.nama = this.nama.join('');
    return this
  }

  addsuffix() {
    this.nama = this.nama + "!!";
    return this
  }

  print() {
    console.log(this.nama);
  }

}

let test = new Bersambung("Hello World");
test.allcaps().splitting().reversing().backwards().addsuffix().print();








