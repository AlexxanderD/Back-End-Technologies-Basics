function solve(input) {
    'use strict';

    // Convert the input string to lowercase and split it into an array of words
    const words = input.toLowerCase().split(' ');

    // Create an object to store the word frequencies
    const wordFrequencies = {};

    // Count the frequency of each word
    for (const word of words) {
        if (wordFrequencies[word]) {
            wordFrequencies[word]++;
        } else {
            wordFrequencies[word] = 1;
        }
    }

    // Extract words with odd frequencies
    const oddOccurrences = [];
    for (const word in wordFrequencies) {
        if (wordFrequencies[word] % 2 !== 0) {
            oddOccurrences.push(word);
        }
    }

    // Join the odd occurrences into a string and return
    return oddOccurrences.join(' ');
}
console.log(solve('Java C# Php PHP Java PhP 3 C#3 1 5 C#'))
console.log(solve('Cake IS SWEET is Soft CAKE sweet Food'))