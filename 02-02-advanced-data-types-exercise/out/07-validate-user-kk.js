function isValidUser(obj) {
    let isValidId = false;
    if ('id' in obj && (typeof obj.id === 'number' || typeof obj.id === 'string')) {
        if (typeof obj.id === 'number') {
            isValidId = obj.id > 100;
        }
        else {
            isValidId = obj.id.length === 14;
        }
    }
    let isValidUsername = false;
    if ('username' in obj && typeof obj.username === 'string') {
        isValidUsername = (obj.username.length >= 5 && obj.username.length <= 10);
    }
    let isValidPasswordHash = false;
    if ('passwordHash' in obj && (typeof obj.passwordHash === 'string' || Array.isArray(obj.passwordHash))) {
        if (typeof obj.passwordHash === 'string') {
            isValidPasswordHash = (obj.passwordHash.length === 20);
        }
        else {
            isValidPasswordHash = (obj.passwordHash.length === 4 && obj.passwordHash.every(x => typeof x === 'string' && x.length === 8));
        }
    }
    let isValidStatus = false;
    if ('status' in obj && typeof obj.status === 'string') {
        isValidStatus = (obj.status === 'Locked' || obj.status === 'Unlocked');
    }
    return isValidId && isValidPasswordHash && isValidUsername && isValidStatus;
}
console.log(isValidUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' })); // false
export {};
//# sourceMappingURL=07-validate-user-kk.js.map