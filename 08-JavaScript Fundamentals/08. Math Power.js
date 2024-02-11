function solve(number, power) {
    let finalNumber = number;
    for (let i = 1; i <= power - 1; i++) {
        finalNumber *= number;
    }
    console.log(finalNumber);
}
solve(2, 8);
solve(3, 4);