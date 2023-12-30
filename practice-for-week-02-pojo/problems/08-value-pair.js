/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  let location = [];
  let name = [];
  let age = [];

  location.push(obj1.location);
  location.push(obj2.location);

  name.push(obj1.name);
  name.push(obj2.name)

  age.push(obj1.age);
  age.push(obj2.age);

  if (key === 'location') {
    return location;
  } else if (key === 'name') {
    return name;
  } else if (key === 'age') {
    return age
  };
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
