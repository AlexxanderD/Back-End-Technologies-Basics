function solve(num1, num2, operator){
'use strict'

let result = 0;

switch(operator){
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    case '%':
        result = num1 % num2;
        break;
    case '**':
        result = num1 ** num2;
        break;

}
console.log(result)
}