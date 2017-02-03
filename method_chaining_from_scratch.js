// The data store:
let data = [{
  firstName: 'SpongeBob',
  lastName : 'SquarePants',
  email    : 'spongebob@crustycrab.com',
  id       : 101
}, {
  firstName: 'Patrick',
  lastName : 'Star',
  email    : 'patric.star@gmail.com',
  id       : 102
}, {
  firstName: 'Squidward',
  lastName : 'Tentacles',
  email    : 'awesomesquidward@yahoo.com',
  id       : 103
}]

console.log();

const titleCaseName = (string) => {
  // ...

}

// Our object with the chainable methods using class in ES6
class Program {
  constructor() {
    this.storage = data
    this.user
    this.concatedName
    this.formatedUser
  }

  findUser(email) {
    for (let i = 0; i < this.storage.length; i++) {
      if(this.storage[i].email === email) {
        this.user = this.storage[i]
      }
    }
    return this
  }

  formatName() {
    this.concatedName = this.user.firstName+' '+this.user.lastName  
    return this
  }

  formatData() {
    this.formatedUser = `
      Hasil:
      Member name : ${this.concatedName}
      ID : ${this.user.id}
      email : ${this.user.email}
    ` 
    return this
  }

  displayUser() {
    console.log(this.formatedUser)
  }

  titleCaseName (string) {
    // ...
    
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
