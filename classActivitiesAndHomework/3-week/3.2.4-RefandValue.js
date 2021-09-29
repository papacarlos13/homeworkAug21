// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4); //true
console.log("Hello, world" === "Hello, world"); //true

let x = false;
let y = x;
console.log(x === y); //true

x = !x; //x=true now
console.log(x === y); //false

console.log([1, 2, "c"] === [1, 2, "c"]);
//false, the array does not have value [indexed], they are undefined

console.log({} === {});
// false, same reason; it is 'falsy', not strictly true

y = { id: 1 };
x = y;
console.log(x === y); // true, they both reference the same object
y.id += 1;
console.log(x.id === y.id); // true, the "id" key x will change with y
