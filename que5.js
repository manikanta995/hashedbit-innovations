function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(`\\b${wrong}\\b`, 'g'), correct);
}

let sentence = "I love programming in JavaScript. JavaScript is fun.";
let wrongWord = "JavaScript";
let correctWord = "Python";

let updatedSentence = correctfn(sentence, wrongWord, correctWord);
console.log(updatedSentence);
