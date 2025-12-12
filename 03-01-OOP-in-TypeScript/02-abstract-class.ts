export { };


abstract class Book {
    protected _name: string;
    author: string;

    constructor(n: string, auth: string) {
        this._name = n;
        this.author = auth;
    }

    // real method
    printBook() {
        console.log(`Name: ${this._name}, Author: ${this.author}`);
    }

    // Abstract method
    abstract getDescription(): string;

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName.length > 5) {
            this._name = newName;
        } else {
            console.warn("Book name must be longer than 5 chars.");
        }
    }

    set newAuthor(newAuthor: string) {
        if (!newAuthor.includes(this.author)) {
            this.author = newAuthor;
        } else console.warn('Author already exists');

    }
}
type BookType = "Fantasy" | "Fiction";
class FantasyBook extends Book {
    bookType: BookType;

    constructor(name: string, author: string, bookType: BookType) {
        super(name, author);
        this.bookType = bookType;
    }
    getDescription(): string {
        if (this.name.includes('Harry Potter')) {
            this.bookType = 'Fantasy';
        } else this.bookType = 'Fiction'
        return `${this.bookType} book: ${this.name} by ${this.author}`
    }
}

const myBook = new FantasyBook('Kniga', 'Avtor', 'Fantasy');
console.log(myBook.getDescription());
myBook.name = 'ime2'; // will return warning/error
console.log(myBook.getDescription());
myBook.name = 'Imeto e veche dulgo'; // good result
myBook.newAuthor = 'Anna';
myBook.printBook();
myBook.newAuthor = 'Anna2'
myBook.name= 'Harry Potter'
myBook.newAuthor = 'Joanne Rowlling';
console.log(myBook.getDescription());

