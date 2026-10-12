// Assignment 5: Function Architecture and Scope

function calculateArea(length = 5, width = 4) {
    return length * width;
}

let defaultArea = calculateArea();

console.log("Standard Function Area (Default 5x4):", defaultArea);

const calculateAreaArrow = (length = 5, width = 4) => {
    return length * width;
};

// Using custom values: 10 x 3
let customArea = calculateAreaArrow(10, 3);

console.log("Arrow Function Area (Custom 10x3):", customArea);

try {
    {
        let blockVar = "I am inside the block";
        console.log("Inside block:", blockVar);
    }

    // blockVar cannot be accessed outside the block
    console.log(blockVar);

} catch (error) {
    console.log("Scope Test Error:", error.toString());
}