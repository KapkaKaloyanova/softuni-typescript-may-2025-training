"use strict";
function countFrequencies(words) {
    const wordCounts = new Map();
    for (const word of words) {
        let countOfWords = wordCounts.get(word) ?? 0;
        wordCounts.set(word, countOfWords + 1);
    }
    return wordCounts;
}
let testWords = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countFrequencies(testWords));
//# sourceMappingURL=05a-frequency-counter.js.map