function solve(text, word) {
    let words = text.split(' ');
    let count = 0;
    words.forEach(element => {
        if (element === word) {
            count++;
        }
    });
    console.log(count);
}   
solve('This is a word and it also is a sentence','is'); // 2
solve('softuni is great place for learning new programming languages','softuni'); // 1