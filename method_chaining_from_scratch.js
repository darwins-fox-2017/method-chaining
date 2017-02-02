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

// const titleCaseName = (string) => {}

// Our object with the chainable methods using class in ES6
class Program {
  constructor (value) {
    this.data = value
    this.user = ""
  }

  // titleCaseName (string) {
  //   // ...
  // }

  findUser (emailUser) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].email == emailUser) {
        this.user = this.data[i]
      }
    }
    return this
  }

  formatName () {
    this.user.userName = `${this.user.firstName} ${this.user.lastName}`
    return this
  }

  formatData () {
    this.user.format = `Member name: ${this.user.userName}\nID: ${this.user.id}\nEmail: ${this.user.email}`
    return this
  }

  displayUser () {
    console.log(this.user.format)
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const program = new Program(data)
program
  .findUser('spongebob@crustycrab.com')
  .formatName()
  .formatData()
  .displayUser()

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com
