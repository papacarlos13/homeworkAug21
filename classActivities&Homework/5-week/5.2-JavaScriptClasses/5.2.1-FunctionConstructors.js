// create an object literal
const puppy = {
  name: "Spot",
  age: 5,
  hobbies: ["Run around", "play catch", "go to the park"]
};
// include a method that uses "this"
const person = {
  name: "Alex",
  hobbies: ["fishing", "sleeping", "watching hockey", "teaching"],
  greet() {
    return `Wedding bells for ${this.name}`;
  }
};

// create a function in the global scope that prints "this"
function logThis() {
    console.log("This is: ", this);
}
logThis();
//which doesn't work because this is a method in the parent object, not global scope