class Book {
    _name;
    author;
    constructor(n, auth) {
        this._name = n;
        this.author = auth;
    }
    // real method
    printBook() {
        console.log(`Name: ${this._name}, Author: ${this.author}`);
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.length > 5) {
            this._name = newName;
        }
        else {
            console.warn("Book name must be longer than 5 chars.");
        }
    }
    set newAuthor(newAuthor) {
        if (!newAuthor.includes(this.author)) {
            this.author = newAuthor;
        }
        else
            console.warn('Author already exists');
    }
}
class FantasyBook extends Book {
    bookType;
    constructor(name, author, bookType) {
        super(name, author);
        this.bookType = bookType;
    }
    getDescription() {
        if (this.name.includes('Harry Potter')) {
            this.bookType = 'Fantasy';
        }
        else
            this.bookType = 'Fiction';
        return `${this.bookType} book: ${this.name} by ${this.author}`;
    }
}
const myBook = new FantasyBook('Kniga', 'Avtor', 'Fantasy');
console.log(myBook.getDescription());
myBook.name = 'ime2'; // will return warning/error
console.log(myBook.getDescription());
myBook.name = 'Imeto e veche dulgo'; // good result
myBook.newAuthor = 'Anna';
myBook.printBook();
myBook.newAuthor = 'Anna2';
myBook.name = 'Harry Potter';
myBook.newAuthor = 'Joanne Rowlling';
console.log(myBook.getDescription());
export {};
//# sourceMappingURL=02-abstract-class.js.map