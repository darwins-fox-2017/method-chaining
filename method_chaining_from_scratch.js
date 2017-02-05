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

  constructor() {
    this.input = data
    this.user = ''
  }

  findUser(email) {
    for (var i = 0; i < this.input.length; i++) {
      if (this.input[i].email == email) {
        this.user = this.input[i]
      }
    }
    return this
  }

  formatName() {
    this.user.name = `${this.user.firstName} ${this.user.lastName}`
    return this
  }

  formatData() {
    this.user.format = `RESULT \nFirstname: ${this.user.firstName} \nLastname: ${this.user.lastName} \nEmail: ${this.user.email} \nID: ${this.user.id} \n`
    return this
  }

  displayUser() {
    console.log(this.user.format);
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


program
  .findUser('patric.star@gmail.com')
  .formatName()
  .formatData()
  .displayUser()
