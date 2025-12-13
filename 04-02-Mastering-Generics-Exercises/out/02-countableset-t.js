"use strict";
class CountedSet {
    // private counts: Map<T, number> = new Map<T, number>() // sukraten variant
    counts;
    constructor() {
        this.counts = new Map();
    }
    add(item) {
        if (this.counts.has(item)) {
            let currentCount = Number(this.counts.get(item));
            currentCount++;
            this.counts.set(item, currentCount);
        }
        else {
            this.counts.set(item, 1);
        }
    }
    remove(item) {
        let currentCount = Number(this.counts.get(item));
        if (this.counts.has(item) && currentCount >= 1) {
            currentCount--;
            this.counts.set(item, currentCount);
        }
    }
    contains(item) {
        const count = this.counts.get(item) ?? 0;
        return count > 0;
    }
    getNumberOfCopies(item) {
        return this.counts.get(item) ?? 0;
    }
}
// let countedSet = new CountedSet<string>();
// countedSet.add('test');
// countedSet.add('test');
// console.log(countedSet.contains('test'));
// console.log(countedSet.getNumberOfCopies('test'));
// countedSet.remove('test')
// countedSet.remove('test')
// countedSet.remove('test')
// console.log(countedSet.getNumberOfCopies('test'));
// console.log(countedSet.contains('test'));
let codesCounterSet = new CountedSet();
codesCounterSet.add(404);
codesCounterSet.add(200);
console.log(codesCounterSet.contains(404));
console.log(codesCounterSet.getNumberOfCopies(200));
// codesCounterSet.add(205);   //TS Error
// codesCounterSet.getNumberOfCopies(350);    //TS Error
//# sourceMappingURL=02-countableset-t.js.map