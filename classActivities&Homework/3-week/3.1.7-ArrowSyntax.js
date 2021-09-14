// refactor the functions below into arrow syntax

// function myNumberFunction() {
//   return ((2 ** 2 + 3) % 4) * 14;
// }
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;
//if there is no parameter, still need a parenthesis

// function greet(name) {
//   return `Hello, ${name}`;
// }

const greet = name => `Hello, ${name}`;
//if there is only one parameter, doesn't need parenthesis

// const timeOfDayGreet = function(name, timeOfDay) {
//   return `Hello, ${name}, good ${timeOfDay}`;
// };

const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`
//2 parameters need parenthesis

// function tripleAndHalf(num) {
//   let triple = num * 3;
//   return triple / 2;
// }

const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
}
//need block code (requires a return keyword) because multiple lines in {}
//only one parameter, doesn't need parenthesis

// function sumTwoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   console.log(`The sum of your numbers is ${sum}.`);
//   return sum;
// }

const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}

//arrow syntax doesn't need the function keyword (declares const instead)
//requires a return keyword when block code/multiple lines required