// Assignment 3: Conditional Logic Implementation

let score = 85;
let grade;


if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

switch (grade) {
    case "A":
        console.log("Grade: A");
        break;

    case "B":
        console.log("Grade: B");
        break;

    case "C":
        console.log("Grade: C");
        break;

    case "D":
        console.log("Grade: D");
        break;

    case "F":
        console.log("Grade: F");
        break;

    default:
        console.log("Invalid Grade");
}
let status = score >= 60 ? "Passed" : "Failed";

// Display final output
console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);