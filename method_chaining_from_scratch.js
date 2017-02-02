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
  constructor(){
    this.data=data;
    this.ketemu;
    this.fullname;
    this.dataformat;
  }
  titleCaseName (string) {
    let output=string.toLowerCase();
    return this;
  }
  findUser(email){
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].email===email) {
        this.ketemu=i;
      }
    }
    return this;
  }
  formatName(){
    let name=this.data[this.ketemu].firstName +' ' +this.data[this.ketemu].lastName;
    this.fullname=name;
    return this;
  }
  formatData(){
    let dataformated=['Member Name :'+this.fullname,'ID :' +this.data[this.ketemu].id,'Email : '+this.data[this.ketemu].email];
    this.dataformat=dataformated;
    return this;
  }
  displayUser(){
    for (var i = 0; i < this.dataformat.length; i++) {
      console.log(this.dataformat[i]);
    }
    return this.dataformat;
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
//console.log(program.data[0].email);

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com
