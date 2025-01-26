let str = 'This is a sample string for counting vowels and consonants';
let vowels = 'aeiouAEIOU';
let consonantCount = 0;
let vowelCount = 0;

for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {  // Check if the character is a letter
        if (vowels.includes(str[i])) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}

console.log('Vowels:', vowelCount);
console.log('Consonants:', consonantCount);
