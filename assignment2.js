// Assignment 2: Operators, Expressions, and Input Handling

let billAmount = prompt("Enter the bill amount:");
let tipPercentage = prompt("Enter the tip percentage:");

billAmount = Number(billAmount);
tipPercentage = Number(tipPercentage);

let calculatedTip = (billAmount * tipPercentage) / 100;

let totalAmount = billAmount + calculatedTip;

console.log("Subtotal: $" + billAmount);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + calculatedTip);
console.log("Total Amount to Pay: $" + totalAmount);