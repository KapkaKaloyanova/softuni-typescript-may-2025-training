"use strict";
class Product {
    static productCount = 0; // to be protected outside the class 
    id; // auto increment using productCount
    _name; // at least 1 char length
    _price; // must be > 0
    constructor(name, price) {
        this.id = ++Product.productCount;
        this.name = name;
        this.price = price;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    static get totalCount() {
        return Product.productCount;
    }
    set name(newName) {
        if (newName.length < 1) {
            throw new Error('Name must be at least 1 character long.');
        }
        this._name = newName;
    }
    set price(newPrice) {
        if (newPrice <= 0) {
            throw new Error('Price must be positive.');
        }
        this._price = newPrice;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: \$${this.price} `;
    }
}
class Inventory {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        const formattedProducts = this.products
            .map(element => element.getDetails())
            .join('\n');
        return `${formattedProducts}\nTotal products created: ${Product.totalCount} `;
    }
}
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
//# sourceMappingURL=13-inventory-system.js.map