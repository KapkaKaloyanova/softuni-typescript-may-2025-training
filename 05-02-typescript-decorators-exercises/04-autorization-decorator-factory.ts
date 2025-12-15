export { };

function Authorize(service: MockAuthorizationService) {
    return function AuthorizeGetter(target: any, propertyName: string, descriptor: PropertyDescriptor) {

        const originalGetter = descriptor.get

        descriptor.get = function () {
            if (!service.canViewData(propertyName)) {
                throw new Error('You are not allowed to view this information')
            }
            return originalGetter?.call(this)
        }
        return descriptor;
    }
}


class MockAuthorizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {
        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name', 'age'].includes(property);
            default: return false;
        }
    }
}

let mockAuthorizationService = new MockAuthorizationService('Admin');
// let mockAuthorizationService = new MockAuthrizationService('PersonalDataAdministrator'); // runtime error
// let mockAuthorizationService = new MockAuthrizationService('Guest');// runtime error

class User {

    private _name: string;
    private _age: number;
    private _creditCardNumber: string;

    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }

    @Authorize(mockAuthorizationService)
    get name(): string { return this._name };
    @Authorize(mockAuthorizationService)
    get age(): number { return this._age };
    @Authorize(mockAuthorizationService)
    get creditCardNumber(): string { return this._creditCardNumber };
}


const user1 = new User("John Doe", 30, 'ABCD-1234');
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);