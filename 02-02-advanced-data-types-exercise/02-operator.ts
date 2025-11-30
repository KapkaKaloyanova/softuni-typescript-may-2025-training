function operators(
    param: string | number | string[],
    operation: 'Index' | 'Length' | 'Add',
    operand: number) {

    switch (operation) {
        case 'Index':
            if (typeof param !== 'number') {
                let result = param[operand];
                return result;
            }
            break;

        case 'Length':
            if (typeof param !== 'number') {
                let result = param.length % operand;
                return result;
            }
            break;
        case 'Add':
            if (!Array.isArray(param)){
                return Number(param) + operand;
            }
            // if(typeof param === 'string' || typeof param === 'number'){
            //     let result = Number(param) + operand;
            //     return result;
            // } 
            break;
    }

}

console.log(operators(['First', 'Second', 'Third'], 'Index', 1));
console.log(operators('string', 'Index', 1));
console.log(operators(['Just', 'Two'], 'Length', 5));
console.log(operators('short string1', 'Length', 5));
console.log(operators('7', 'Add', 3));
console.log(operators(11, 'Add', 3));
