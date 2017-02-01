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
const example = word
  .allcaps()
  .splitting()
  .reversing()
  .backwards()
  .addsuffix()
  .print()

// Alternatif penulisan:
// word.allcaps().splitting().reversing().backwards().addsuffix().print()
