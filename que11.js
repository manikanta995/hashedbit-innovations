let students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

let result = Object.keys(students).map(student => {
    let scores = Object.values(students[student]);  // Get the values (scores) for each student
    let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;  // Calculate the average
    return { [student]: { average: average.toFixed(2) } };  // Return the student with their average
});
console.log(result);
