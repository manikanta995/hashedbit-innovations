function repeatedSumOfDigits(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}

let result = repeatedSumOfDigits(456);
console.log(result);  // Output: 6
