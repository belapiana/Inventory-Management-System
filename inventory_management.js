// Task 1: Create an Inventory Array of Product Objects

const inventory = [
{ name: 'Chocolate', price: 5, quantity: 125, lowStockLevel: 10 },
{ name: 'Lolipop', price: 1, quantity: 56, lowStockLevel: 12 },
{ name: 'Candy', price: 2, quantity: 88, lowStockLevel: 15 },
{ name: 'Cookies', price: 6, quantity: 211, lowStockLevel: 21 },
{ name: 'Gummie bears', price: 3, quantity: 27, lowStockLevel: 16 }
];

// Task 2: Create a Function to Display Product Details

function displayProductDetails (input) {
    const product = inventory.find(element => element.name === input);
    if (product) {
    console.log(`Product: ${product.name}`);
    console.log(`Price:$${product.price}`);
    console.log(`Quantity:${product.quantity}`);
    console.log(product.quantity > product.lowStockLevel ? `In Stock` :`Low Stock`)}
    else {console.log(`Product not found`)};
};

displayProductDetails("Chocolate");

// Task 3: Create a Function to Update Product Stock After Sales

function updateStock (input, unitsSold) {
    product = inventory.find(element => element.name === input);
    product.quantity -= unitsSold;
    console.log(`New quantity after units sold: ${product.quantity}`)
    if (product.quantity > product.lowStockLevel) 
        {console.log(`In Stock`)}
    else {console.log(`Low Stock`)}
};

updateStock("Lolipop", 24);

// // Task 4: Create a Function to Check Low Stock Products

// function checkLowStock (inventory) {
// let allInStock= true
//     inventory.forEach(item => {
//     if  (item.quantity < item.lowStockLevel) 
//       {console.log(`${item.name} is low on stock!`);
//         allInStock=false}
//   });
//   if (allInStock===true) {console.log("All items are in Stock")} else {}
// };

// checkLowStock(inventory)

// // Task 5: Create a Function to Calculate Total Inventory Value

// function calculateInventoryValue (inventory) {
// let totalValue = 0
// inventory.forEach (item => {
// totalValue += (item.quantity * item.price)
// });
// console.log(`Total Inventory Value: ${totalValue}`)
// };

// calculateInventoryValue(inventory)

// // Task 6: Create a Function to Process a Sale

// function processSale (input, unitsSold) {
//     const product = inventory.find(element => element.name === input);
//     updateStock(product, unitsSold);
// };

// console.log(processSale ("Gummie Bears, 7"));