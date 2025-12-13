function countFrequencies(words: string[]):Map<string, number>{
    const wordCounts = new Map<string, number>();

    for (const word of words){
        let countOfWords=wordCounts.get(word) ?? 0;
        wordCounts.set(word, countOfWords + 1);

    }
    return wordCounts;
}

let testWords = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countFrequencies(testWords));