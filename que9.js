function countWords(paragraph) {
    let words = paragraph.split(/\s+/);  // Split by one or more spaces
    return words.filter(word => word.length > 0).length;  // Filter out any empty strings and return the count
}

let paragraph = "This is a simple paragraph with some words.";
let wordCount = countWords(paragraph);
console.log(wordCount); 
