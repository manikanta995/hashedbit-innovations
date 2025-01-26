let string = 'INDIA';
let arr = string.split('');  // Convert the string to an array

// Use splice to change the content of the array
arr.splice(4, 1, 'O', 'N', 'E', 'S', 'I', 'A');

let result = arr.join('');  // Join the array back into a string
console.log(result);
