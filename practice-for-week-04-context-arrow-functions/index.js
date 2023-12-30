const User = require('./classes/user');

const michelle = new User('Michelle');

const greetAfterNameChange = (changeName, newName) => {
  this.name = changeName(newName);

  console.log(`Hi my name is ${this.name}`);
}

greetAfterNameChange(michelle.changeName, 'Elle');
  // should print out: Hi my name is Elle
