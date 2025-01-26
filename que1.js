// Array of states in India
let states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal"
  ];
  
  // Remove names starting with vowels
  let filteredStates = states.filter(state => !/^[aeiouAEIOU]/.test(state));
  
  // Output the filtered list
  console.log(filteredStates);
  