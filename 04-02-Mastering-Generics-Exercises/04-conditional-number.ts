type InputParamType<T> = T extends number ? number : string;

function conditionalNumber<T>(param: InputParamType<T>): void {
    if(typeof param === 'number'){
        console.log( param.toFixed(2));
    } else console.log(param);
}