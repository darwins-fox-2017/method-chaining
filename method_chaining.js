
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

const convert = function(string){

        this.allcaps = function(){
          string = string.toUpperCase()
          return this
        }

        this.splitting = function(){
          string = string.split('')
          return this
        }

        this.reversing = function(){
          string = string.reverse()
          return this
        }

        this.backwards = function(){
          string = string.join('')
          return this
        }

        this.addsuffix = function(){
          string += '!!!'
          return this
        }

        this.print = function(){
          console.log(string)
          return this
        }

      }

const word = new convert('Hello World')

const example = word
  .allcaps()
  .splitting()
  .reversing()
  .backwards()
  .addsuffix()
  .print()

// Alternatif penulisan:
// word.allcaps().splitting().reversing().backwards().addsuffix().print()
