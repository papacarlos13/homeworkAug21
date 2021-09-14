// wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function

// let total = 0;
// for (let i = 1; i <= 100; i++) {
//   total += i;
// }

function addNumbersFrom1To100() {
let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
return total;
}
// the for loop is the child variable
// invoke the function and console.log its value
console.log(addNumbersFrom1To100());

// try to print the variable "total" outside the function
// ? what do you expect ?
// console.log(total);
// total only exists in the scope of the function

// examine the code below,
// ? which console.log statement will not print when you invoke the parentAndChildScope function ? (the second function)
// function childScope(param) {
//   const childVariable = "I am in the child's scope";
//   console.log("Child Scope, Parent Variable:", param);
//   console.log("Child Scope, Child Variable:", childVariable);
// }

// function parentAndChildScope() {
//   const parentVariable = "I am in the parent's scope";
//   childScope(parentVariable);
// invokes earlier function giving it a new parameter
// will print

//   console.log("Parent Scope, Parent Variable:", parentVariable);
// will print

//   console.log("Parent Scope, Child Variable:", childVariable);
// }
//child variable will return error because it is only defined in previous function's scope
// parentAndChildScope();