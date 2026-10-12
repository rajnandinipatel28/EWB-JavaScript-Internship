# Interactive Product Inventory & Analytics Dashboard

A console-based JavaScript application that manages product inventory, categorizes products by price, and generates basic inventory and financial reports. This project demonstrates core JavaScript concepts through a practical inventory management system.

## Features

- **Product Management:** Add new products with a name and price using browser prompts.
- **Input Validation:** Validate product names and prices before adding them to the inventory.
- **Product Categorization:** Automatically classify products as Budget, Standard, or Premium based on their prices.
- **Inventory Search:** Search for products by name using loops and conditional statements.
- **Inventory Analytics:** Calculate the total value of all products.
- **Tax and Discount Calculation:** Calculate the final value after applying a discount and tax.
- **Affordable Product Filtering:** Find products priced below $200.
- **Formatted Reports:** Generate uppercase product summaries with their prices.

## Technologies Used

- JavaScript (ES6+)
- HTML DOM Browser APIs (`prompt()`)
- JavaScript Array Methods

## JavaScript Concepts Covered

This project demonstrates the following concepts:

- Variables and data types (`let`, `const`)
- Operators and type conversion
- Conditional statements (`if...else`, `switch`, ternary operator)
- Loops (`for`) and loop control (`break`, `continue`)
- Functions and arrow functions
- Default parameters and local scope
- Arrays and objects
- Array methods (`push()`, `forEach()`, `filter()`, `map()`)
- String methods (`trim()`, `toLowerCase()`, `toUpperCase()`)
- Input validation and error handling

## How to Run

1. Clone this repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   ```

2. Navigate to the project directory:

   ```bash
   cd YOUR-REPOSITORY
   ```

3. Open the JavaScript file in a browser-based JavaScript environment or include it in an HTML file.

4. Run the program and enter a product name and price when prompted.

> **Note:** This project uses `prompt()`, which is available in web browsers. It will not work directly in Node.js without additional input-handling code.

## Sample Inventory

| Product | Price | Category |
|---|---:|---|
| Laptop | $800 | Premium |
| Mouse | $25 | Budget |
| Monitor | $150 | Standard |

## Sample Output

```text
--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: $975
Value After 10% Discount and 18% Tax: $1033.83
Filtered Affordable Items (Under $200): ["Mouse","Monitor"]
Formatted Report List: ["LAPTOP: $800","MOUSE: $25","MONITOR: $150"]
```

## Future Improvements

- Build a graphical dashboard using HTML and CSS.
- Add, update, and delete inventory items.
- Implement category-based filtering and sorting.
- Store inventory data using Local Storage.
- Add charts to visualize inventory value and product distribution.

## Author

**Rajnandini Patel**

B.Tech Computer Science & Engineering  
Lakshmi Narain College of Technology (LNCT), Bhopal

---

*Developed as a JavaScript capstone project to practice fundamental programming concepts and array operations.*
