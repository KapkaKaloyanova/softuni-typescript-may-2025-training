type HttpResponse = {
    code: number, 
    text: string, 
    printChars? : number
};

function  httpCodes (resp: HttpResponse) {
    // if (resp.printChars){
    //     let initial = resp.text.slice(0, resp.printChars);
    //     return initial;
    // }
    if('printChars' in resp){
        return resp.text.slice(0, resp.printChars);
    }
    return resp.text;    
}

console.log( httpCodes({ code: 200, text: 'OK'}));
console.log( httpCodes({ code: 201, text: 'Created'}));
console.log( httpCodes({ code: 400, text: 'Bad Request', printChars: 4}));
console.log( httpCodes({ code: 404, text: 'Not Found'}));
console.log( httpCodes({ code: 404, text: 'Not Found', printChars: 3}));
console.log( httpCodes({ code: 500, text: 'Internal Server Error', printChars: 1}));

