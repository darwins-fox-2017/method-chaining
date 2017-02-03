// The data store:
let data = [{
  firstName: 'SpongeBob',
  lastName: 'SquarePants',
  email: 'spongebob@crustycrab.com',
  id: 101
}, {
  firstName: 'Patrick',
  lastName: 'Star',
  email: 'patric.star@gmail.com',
  id: 102
}, {
  firstName: 'Squidward',
  lastName: 'Tentacles',
  email: 'awesomesquidward@yahoo.com',
  id: 103
}]

const titleCaseName = (string) => {
  // ...
}

// Our object with the chainable methods using class in ES6
class Program {
  titleCaseName (string) {
    // ...
  }

  constructor(){
    this.input = data
    this.tampung  = ""
    this.hasil= []
  }

  findUser(string){
    this.string = string
    return this
  }

  formatName(){
    for (let i = 0; i < this.input.length; i++) {
      if(this.string == this.input[i].email){
        this.tampung = i
        return this
      }
    }
  }

  formatData(){
    this.hasil.push(this.input[this.tampung])
    return this
  }

  displayUser(){
    console.log(`
    Member Name : ${this.hasil[0]['firstName']} ${this.hasil[0]['lastName']}
    ID : ${this.hasil[0]['id']}
    Email : ${this.hasil[0]['email']}`)
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const program = new Program()
program
  .findUser('spongebob@crustycrab.com')
  .formatName()
  .formatData()
  .displayUser()

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com
