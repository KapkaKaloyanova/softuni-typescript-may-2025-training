class Product {
    private static productCount: number = 0; // to be protected outside the class 
    readonly id: number; // auto increment using productCount
    private _name!: string; // at least 1 char length
    private _price!: number; // must be > 0

    constructor(name: string, price: number) {
        this.id = ++Product.productCount;
        
        this.name = name;
        this.price = price;
    }

    get name(): string {
        return this._name;
    }
    
    get price(): number {
        return this._price;
    }

    static get totalCount(): number {
        return Product.productCount;
    }

    set name(newName: string) {
        if (newName.length < 1) {
            throw new Error('Name must be at least 1 character long.')
        }
        this._name = newName
    }

    set price(newPrice: number) {
        if (newPrice <= 0) {
            throw new Error('Price must be positive.')
        }
        this._price = newPrice;
    }

    public getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: \$${this.price} `
    }
}

class Inventory {
    private products: Product[]=[];

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public listProducts(): string {
        const formattedProducts= this.products
            .map(element => element.getDetails())
            .join('\n');


        return `${formattedProducts}\nTotal products created: ${Product.totalCount} `
    }
}


const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
