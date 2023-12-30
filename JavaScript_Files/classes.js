class CatalogItem {
    constructor(title, series) {
      this.title = title;
      this.series = series;
    }

    getInformation() {
      if (this.series) {
        return `${this.title} (${this.series})`;
      } else {
        return this.title;
      }
    }
  }

  class Book extends CatalogItem {
    constructor(title, series, author) {
      super(title, series);
      this.author = author;
    }
  }

  class Movie extends CatalogItem {
    constructor(title, series, director) {
      super(title, series);
      this.director = director;
    }

    getInformation() {
      let result = super.getInformation();

      if (this.director) {
        result += ` [directed by ${this.director}]`;
      }

      return result;
    }
  }

  // Export the Book and Movie classes by setting properties in exports module.
module.exports.Book = Book;
module.exports.Movie = Movie;

// Export the Book and Movie classes by assigning properties to exports.module.
module.exports = {
    Book,
    Movie
  };

  //Export by exports shortcut
  class CatalogItem {
    // Contents removed for brevity.
  }

  class Book extends CatalogItem {
    // Contents removed for brevity.
  }

  class Movie extends CatalogItem {
    // Contents removed for brevity.
  }

  // Export the Book and Movie classes with exports variable (cannot use to assign a new object)
  exports.Book = Book;
  exports.Movie = Movie;

  // this goes in the index.js fine
/*
const theGrapesOfWrath = new Book(
    "The Grapes of Wrath",
    null,
    "John Steinbeck"
  );
  const aNewHope = new Movie(
    "Episode 4: A New Hope",
    "Star Wars",
    "George Lucas"
  );*/
