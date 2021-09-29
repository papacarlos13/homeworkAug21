let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values (when non-boolean primitive types == false)
x = 0;

// print x, y, and z

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values

// using BRACKET NOTATION, assign a value to b
b[0] = 1;

// using DOT NOTATION, assign a PROPERTY to c
c.key = "value";

// using DOT NOTATION, assign a METHOD to c
c.method = () => "something";

c.method();
// using BRACKET NOTATION, call the method in c
c["method"]();
// print a, b, and c
