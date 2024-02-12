function solve(inputArray, numberOfRotations){
    'use strict';
    for (let i = 0; i < numberOfRotations; i++) {
        let element = inputArray.shift();
        inputArray.push(element);
    }
    console.log(inputArray.join(' '));
}
solve([51, 47, 32, 61, 21], 2)
solve([32, 21, 61, 1], 4)
solve([2, 4, 15, 31], 5)