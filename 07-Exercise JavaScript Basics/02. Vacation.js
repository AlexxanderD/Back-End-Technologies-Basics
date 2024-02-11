function solve(number, type, day) {
    'use strict';
    let totalAmount = 0;

    if (type === 'Students') {
        if (day === 'Friday') {
            totalAmount = number * 8.45;
        }
        else if (day === 'Saturday') {
            totalAmount = number * 9.80;
        }
        else if (day === 'Sunday') {
            totalAmount = number * 10.46;
        }

        if(number >= 30) {
            totalAmount = totalAmount * 0.85
        }
    } else if (type === 'Business') {
        if (day === 'Friday') {
            totalAmount = number * 10.90;
        }
        else if (day === 'Saturday') {
            totalAmount = number * 15.60;
        }
        else if (day === 'Sunday') {
            totalAmount = number * 16;
        }
        if(number >= 100 ){
            const perNight = totalAmount / number;
            totalAmount = perNight * (number - 10);
        }

    } else if (type === 'Regular') {
        if (day === 'Friday') {
            totalAmount = number * 15;
        }
        else if (day === 'Saturday') {
            totalAmount = number * 20;
        }
        else if (day === 'Sunday') {
            totalAmount = number * 22.50;
        }
        if (number >=10 && number <= 20) {
            totalAmount = totalAmount * 0.95;
        }
    
    }
    console.log(`Total price: ${totalAmount.toFixed(2)}`);
}

solve (30,"Students","Sunday")
solve(40,"Regular","Saturday")