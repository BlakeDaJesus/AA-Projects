console.log('Hello World');

class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }

    speak() {
      console.log(this.sound);
    }

    static pet(animal) {
      console.log(`You attempt to pet ${animal.name}`);
    }
  }


  const fluffy = new Dog('Fluffy', 'woof');
  fluffy.speak(); // woof
  Dog.pet(fluffy); // You attempt to pet Fluffy
