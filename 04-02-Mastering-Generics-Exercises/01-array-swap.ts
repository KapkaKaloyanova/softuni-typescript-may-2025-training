function swap<T>(a: T[], aIndex: number, b: T[], bIndex: number): void {
    // размяна a[aIndex] и b[bIndex] 
    // 1. запазване, 2. презаписване 1 с 2, 3. презаписване 2 с запазената стойност

    const temp: T = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;

    

}

let a = ['test', '123'];
let b = ['a', 'b', 'c'];
swap<string>(a, 0, b, 2);
console.log(a)
console.log(b)