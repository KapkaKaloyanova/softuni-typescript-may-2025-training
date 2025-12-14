function ValidateAgeAccessor(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    // console.log(descriptor.set);
    
    const originalSetter = descriptor.set // save original func

    descriptor.set = function (val: number) { // update func with new func
        if (val < 1 || val > 200) {
            throw new Error('Age must be between 1 and 200');
        }
        originalSetter?.call(this, val);  // call original func
    }
    return descriptor; 
}

class Age {
    private _age!: number;
    constructor(age: number) {
        this.age = age;
    }
    @ValidateAgeAccessor
    set age(val: number) { this._age = val; }
    get age() { return this._age; }
}



let ageVal = new Age(10);
ageVal.age = -10;
