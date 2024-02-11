function demos(n, array) {
    let reverseArray = [];
    for (let i = 0; i < n; i++) {
        reverseArray.unshift(array[i]);
    }
    console.log(reverseArray.join(" "));
}


demos(3, [10, 20, 30, 40, 50]);
demos(4, [-1, 20, 99, 5]);
demos(2, [66, 43, 75, 89, 4, 7]);