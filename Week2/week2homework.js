// Open the new homework directory in VS Code and create a new JavaScript file - name it something that indicates it is homework for Week 2
// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
let pizzaPlace = "Seneca Pizza";
// (Seneca was the ancient Roman who coined the phrase "It is quality, not quanity that matters.")
let numberOfToppings = 4;
// Print the variables and their types.
console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);
// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(`Here at ${pizzaPlace}, we offer ${numberOfToppings} kinds of toppings for your pizza!`);
// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
if (numberOfToppings > 10) {
    console.log("A whole lot of pizza.");
} else {
    console.log(`"Quality, not quantity."`);
};
// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.
// Bonus Challenge
// Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)
// I will count the evens to 10.
for (i = 2; i <= 10; i += 2) {
    console.log(i);
}

// alternately:
for (let i = 1; i <= numberOfToppings; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//it is only logging the increments where the remainder is zero (an even number)

// An example of the output you want for in this assignment is:

// The House of Pizza string 8 number At The House of Pizza, we have 8 toppings. Quality, not quantity.
