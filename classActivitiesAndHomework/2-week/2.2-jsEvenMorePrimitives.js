// create five variables and assign them values
// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let string = "string";
let number = 10;
let boolean = false;
let nada;
let placeholder = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(string, number, boolean, nada, null);
// create a variable that references a template literal
// inside the template literal, use two variables
const literal = `Have you seen my ${string}? It is ${number} feet long?`;
console.log(literal);
// reassign the value of the variable that references "null"
nada = "something";
// print the value and its type
console.log(`"Nada" is now ${nada}`);
console.log(typeof(nada));
// print a variable that causes a ReferenceError
console.log(nada);
// alter the previous line to no longer cause a ReferenceError
