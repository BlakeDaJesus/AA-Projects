const Employee = require('./employee.js');

const johnWick = new Employee('John Wick', 'Dog Lover');

//johnWick.sayName()

const johnSayName = johnWick.sayName.bind(johnWick);
const johnSayOccupation = johnWick.sayOccupation.bind(johnWick)
setTimeout(johnSayName, 2000);
setTimeout(johnSayOccupation, 3000);
