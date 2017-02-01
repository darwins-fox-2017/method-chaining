const shout_backwards = (data) => {
  return data.toUpperCase().split('').reverse().join('') + '!!!'
}

console.log(shout_backwards('Hello World'))

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
