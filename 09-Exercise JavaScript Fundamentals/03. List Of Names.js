function solve(listofNames){
    'use strict';
    listofNames.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < listofNames.length; i++) {
        console.log(`${i + 1}.${listofNames[i]}`);
    }


}
solve(["John", "Bob", "Christina", "Ema"])