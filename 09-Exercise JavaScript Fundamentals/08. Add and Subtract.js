function solve(firstNumber, secondNumber, thirdNumber){
    'use strict';
    function sum(first, second){
        return first + second;
    }
    const substract = (first, second) => first - second;
    const sumResult = substract(sum(firstNumber, secondNumber), thirdNumber);
    console.log(sumResult);
}
solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);