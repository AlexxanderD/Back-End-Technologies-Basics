function solve(array) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNumber = Number(array[i]);
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        }
        else {
            oddSum += currentNumber;
        }
    }
    console.log(evenSum - oddSum);
}
solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);
