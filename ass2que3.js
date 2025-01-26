function findTax(salary) {
    let tax;
    
    switch (true) {
      case (salary > 0 && salary <= 500000):
        tax = 0;
        break;
      case (salary > 500000 && salary <= 1000000):
        tax = salary * 0.10;
        break;
      case (salary > 1000000 && salary <= 1500000):
        tax = salary * 0.20;
        break;
      case (salary > 1500000):
        tax = salary * 0.30;
        break;
      default:
        tax = 'Invalid salary input';
    }
  
    return tax;
  }
  
  console.log(findTax(300000));  
  console.log(findTax(750000));  
  console.log(findTax(1200000)); 
  console.log(findTax(2000000)); 
  console.log(findTax(-50000));  
  