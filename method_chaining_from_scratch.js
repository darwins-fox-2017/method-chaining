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
  // titleCaseName (string) {
  //   // ...
  // }

  constructor() {
    this.usersData = data;
    this.userIndex = 0
    this.nama = ''
    this.dataNama = ''
  }

  findUser(email) { // output = lokasi index ke 2
    for ( var i = 0; i < this.usersData.length; i++ ) {
      if ( this.usersData[i].email == email ) {
        this.userIndex = i;
        //console.log(this.usersData[i]);
        return this;
      }
    }
  }

  formatName() {
    var index = this.userIndex;
    this.nama = this.usersData[index].firstName + " " + this.usersData[index].lastName;
    //console.log(this.nama);
    return this
  }

  formatData() {
    var index = this.userIndex;
    this.dataNama = `Member name: ${this.nama} \nID: ${this.usersData[index].id} \nEmail: ${this.usersData[index].email}`
    return this
  }

  displayUser() {
    console.log('');
    console.log(this.dataNama);
    return this.dataNama
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
// oke... siappppp
const program = new Program()
program.findUser('spongebob@crustycrab.com')
  .formatName()
  .formatData()
  .displayUser()

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com
