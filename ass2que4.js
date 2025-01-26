function sumOfDigitProducts(n1, n2) {
    // Convert the numbers to strings to easily access each digit
    let str1 = n1.toString();
    let str2 = n2.toString();
    
    // Initialize sum
    let sum = 0;
    

    while (str1.length < str2.length) {
      str1 = '0' + str1;
    }
    
    while (str2.length < str1.length) {
      str2 = '0' + str2;
    }
    

    for (let i = 0; i < str1.length; i++) {
      sum += parseInt(str1[i]) * parseInt(str2[i]);
    }
    
    return sum;
  }
  
  console.log(sumOfDigitProducts(6, 34));  
  console.log(sumOfDigitProducts(123, 456)); 
  console.log(sumOfDigitProducts(56, 789));  
  