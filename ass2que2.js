function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Error: Division by zero is not allowed.';
        }
        break;
      default:
        result = 'Error: Invalid operation.';
    }
    return result;
  }
  
  
  console.log(calculate(10, 5, 'add'));      
  console.log(calculate(10, 5, 'subtract'));  
  console.log(calculate(10, 5, 'multiply'));  
  console.log(calculate(10, 5, 'divide'));    
  console.log(calculate(10, 0, 'divide'));    // Output: Error: Division by zero is not allowed.
  console.log(calculate(10, 5, 'modulus'));   // Output: Error: Invalid operation.
  