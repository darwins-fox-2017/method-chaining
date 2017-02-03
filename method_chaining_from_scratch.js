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
  constructor (value) {
    this.data = value;
    this.people = null;

  }

  findUser(email) {

    for(let i=0; i <this.data.length; i++) {
      if(this.data[i].email === email) {
        this.people = this.data[i]; 
      }

      return this
      
    }
    

  }

  formatName() {
     // tambah property di objek
     this.people.fullNama = `${this.people.firstName} ${this.people.lastName}`
     return this 
  }

  formatData() {
    this.people.identitas = `${this.people.firstName} ${this.people.lastName} ${this.people.email} ${this.people.id}`
    return this
  }

  displayUser() {
    console.log("Member name : " + this.people.fullNama);
    console.log("ID : " + this.people.id);
    console.log("Email : " + this.people.email);

  }



}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
let program = new Program(data)
program
  .findUser('spongebob@crustycrab.com')
  .formatName()
  .formatData()
  .displayUser()

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com


