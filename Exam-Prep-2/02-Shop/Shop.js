function shop(products) {
    let n = Number(products.shift());
    let shopProducts = products.slice(0, n);

    for (let i = n; i < products.length; i++) {
        let [command, arg1, arg2] = products[i].split(' ');

        switch (command) {
            case 'Sell':
                if (shopProducts.length > 0) {
                    console.log(`${shopProducts.shift()} product sold!`);
                }
                break;
            case 'Add':
                if (arg1) {
                    shopProducts.push(arg1);
                }
                break;
            case 'Swap':
                if (arg1 && arg2) {
                    let index1 = Number(arg1);
                    let index2 = Number(arg2);
                    if (index1 >= 0 && index1 < shopProducts.length && index2 >= 0 && index2 < shopProducts.length) {
                        let temp = shopProducts[index1];
                        shopProducts[index1] = shopProducts[index2];
                        shopProducts[index2] = temp;
                        console.log('Swapped!');
                    }
                }
                break;
            case 'End':
                if (shopProducts.length > 0) {
                    console.log(`Products left: ${shopProducts.join(', ')}`);
                } else {
                    console.log('The shop is empty');
                }
                return;
        }
    }
}

// Example usage:
const input = [
    '6',
    'Apple',
    'Banana',
    'Orange',
    'Pineapple',
    'Mango',
    'Sell',
    'Add Peach',
    'Swap 0 2',
    'End'
];

shop(input);
