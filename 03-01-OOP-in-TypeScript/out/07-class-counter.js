"use strict";
class Counter {
    static count = 0;
    static increment() {
        return this.count++;
    }
    ;
    static getCount() {
        return this.count;
    }
}
Counter.increment();
Counter.increment();
console.log(Counter.getCount());
// Counter.count = 10;
//# sourceMappingURL=07-class-counter.js.map