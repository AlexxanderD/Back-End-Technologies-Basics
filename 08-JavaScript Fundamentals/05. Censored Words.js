function solve(input, censoredWord) {
    let censored = input.replace(censoredWord, getStars(censoredWord));
    while (censored.includes(censoredWord)) {
        censored = censored.replace(censoredWord, getStars(censoredWord));
    }
    console.log(censored);
    function getStars(word) {
        return "*".repeat(word.length)
    }
}
solve('A small sentence with some words','small');
solve('Find the hidden word', 'hidden')
