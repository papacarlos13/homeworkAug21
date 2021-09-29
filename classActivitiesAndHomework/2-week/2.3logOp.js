// // Logical Operators
// // ? what do you expect each line to print?
// console.log(true && false);
// console.log(true || false);
// console.log(!true);
// console.log(!(true && false));
// console.log(false || !false);

// // Logical Operators and Truthy/Falsy
// // ? what do you expect each line to print?
// console.log("" && 0);
// console.log(undefined || null);
// console.log(!``);
// console.log(!(1 && "false"));
// console.log(NaN || !"true");

// // ? TO DO: set the age variable equal to a number, then use the conditional operator to construct an expression that returns "full menu" if the age is over 10, and "kids menu" if the age is less than 10
// let age = 10;
// if (age > 10) {
//     console.log("full menu");
// } else {
//     console.log("kid's menu");
// }
// let age = 16;
// if (age >= 25) {
//     console.log("Renting a car can be affordable");
// } else if (age >= 18) {
//     console.log("Renting a car is expensive");
//     } else {
//         console.log("It is illegal to rent a car.");
//     }

// let time = 1200;
// if (time >= 1700) {
//     console.log("Time for dinner!");
// } else if (time >= 1200) {
//     console.log("Time for lunch.");
// } else {
//     console.log("Time for breakfast.");
// }
// // ? TO DO: using only logical operators (no comparison operators), write an if statement that prints "The number is zero" when num is 0.
let num = 0;

if (!num) {
    console.log("The number is zero.");
};
//since 0 is false in JS, the ! will flip it, and the if condition will be rendered true, allowing the {} to run

//or as a ternary statement it would be
// !num ? console.log(`The number is zero.`) : null;

//ternary form is:    condition ? ifTrue : ifFalse