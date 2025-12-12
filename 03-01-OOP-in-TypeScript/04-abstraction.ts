interface Animal {
    // makeSound: () => string;
    makeSound():string;

}

class Dog implements Animal{
    makeSound(){
        return "Woof"
    }
}

const dog = new Dog();
console.log(dog.makeSound());
