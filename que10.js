function reverseString(str) {
    return str.split('').reverse().join('');
}

let reversed = reverseString('Hello');
console.log(reversed);  // Output: olleH
