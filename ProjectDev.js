```javascript
console.log("--- Initializing Inventory System ---");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

let productName = prompt("Enter product name:");
let productPriceInput = prompt("Enter product price:");
let productPrice = Number(productPriceInput);

if (
    productName === null ||
    productName.trim() === "" ||
    productPriceInput === null ||
    productPriceInput.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid input. Product was not added.");
} else {
    productName = productName.trim();

    inventory.push({
        name: productName,
        price: productPrice
    });

    console.log(
        '[Prompt executed: User adds "' +
        productName + '" at "$' + productPrice + '"]'
    );
}

let searchName = productName;

if (searchName !== null && searchName.trim() !== "") {
    let found = false;

    for (let i = 0; i < inventory.length; i++) {
        if (!inventory[i].name) {
            continue;
        }

        if (
            inventory[i].name.toLowerCase() ===
            searchName.trim().toLowerCase()
        ) {
            found = true;
            break;
        }
    }

    console.log(
        found
            ? "Search Result: Product found"
            : "Search Result: Product not found"
    );
}

console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(function(product) {
    let category;

    if (product.price < 50) {
        category = "Budget";
    } else if (product.price < 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    switch (category) {
        case "Budget":
            category = "Budget";
            break;
        case "Standard":
            category = "Standard";
            break;
        case "Premium":
            category = "Premium";
            break;
        default:
            category = "Unknown";
    }

    console.log(
        "* Item: " + product.name +
        " ($" + product.price +
        ") -> Category: " + category
    );
});

function calculateTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }

    return total;
}

const calculateFinalPrice = (
    amount,
    taxRate = 0,
    discountRate = 0
) => {
    let discountedAmount =
        amount - (amount * discountRate / 100);

    let finalAmount =
        discountedAmount + (discountedAmount * taxRate / 100);

    return finalAmount;
};

console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);

console.log("Total Inventory Value: $" + totalValue);

const finalValue = calculateFinalPrice(totalValue, 18, 10);

console.log(
    "Value After 10% Discount and 18% Tax: $" +
    finalValue.toFixed(2)
);

const affordableProducts = inventory.filter(function(product) {
    return product.price < 200;
});

const affordableNames = affordableProducts.map(function(product) {
    return product.name;
});

console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableNames)
);

const report = inventory.map(function(product) {
    return product.name.toUpperCase() + ": $" + product.price;
});

console.log(
    "Formatted Report List:",
    JSON.stringify(report)
);
```