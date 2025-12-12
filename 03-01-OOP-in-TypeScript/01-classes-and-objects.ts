class Book {
    private _name: string; // property name is internal _<name> or #name (real private field)
    readonly author:string;

    constructor(n:string, auth:string){
        this._name = n;
        this.author = auth;
    }

    printBook(){
        console.log(`Name: ${this._name}, Author: ${this.author}`);
        
    }

    // Getter for _name (property name and getter name must be different)
    get name(): string {
        return this._name;
    }

    // Setter for name
    set name(newName: string){
        // if.statement
        if(newName.length > 5){
             this._name = newName;
             console.log(`Title updated to: ${newName}`);
             
        }else{
            console.warn("Book name must be longer than 5 chars.");
        }
    }
}

const myBook = new Book ("Harry Potter", "Joanne Rowlling");

console.log(myBook.name); // this is because of the getter
console.log(myBook.author);
myBook.name = "The Goblet of Fire"; // this is the setter
console.log(myBook.name);


myBook.printBook();
