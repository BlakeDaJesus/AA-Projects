// classes.js

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
        };
    };
};

class Book extends CatalogItem {
    constructor(title, series, author) {
        super(title, series);
        this.author = author;
    };
};

class Movie extends CatalogItem {
    constructor(title, series, director) {
        super(title, series);
        this.director = director;
    };

    getInformation() {
        let result = super.getInformation();

        if (this.director) {
        result += ` [directed by ${this.director}]`;
        };

        return result;
    };
};

//Option A: Set properties on the module.exports object
module.exports.Book = Book;
module.exports.Movie = Movie;

//Option B: Assigning an object to the module.exports property
/*
module.exports = {
  Book,
  Movie
};
*/

//Option C: The exports shortcut (cannot be used to assign properties)
/*
exports.Book = Book;
exports.Movie = Movie;
*/
