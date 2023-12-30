const colors = require('colors')
const classes = require("./classes.js");
const Book = classes.Book;
const Movie = classes.Movie;
/*
const { Book, Movie } = require("./classes");
*/

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

const theGrapesOfWrath = new Book(
    "The Grapes of Wrath",
    null,
    "John Steinbeck"
  );
  const aNewHope = new Movie(
    "Episode 4: A New Hope",
    "Star Wars",
    "George Lucas"
  );

  console.log(aNewHope.getInformation());
