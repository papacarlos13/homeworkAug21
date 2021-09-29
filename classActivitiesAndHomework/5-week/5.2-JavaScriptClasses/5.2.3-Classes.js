// refactor your Animal function constructor and methods to use the class keyword
class Animal {
  constructor(name, color, weight, personality) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.personality = personality;
    this.bio = `${this.name} is ${this.color} and weighs ${this.weight} pounds`;
  }
}
// extend the Animal class with a type of animal
class SpecificAnimal extends Animal {
  constructor(name, color, weight, personality, type) {
    super(name, color, weight, personality);
    this.type = type;
  }
  // add some unique methods and properties to the class extension
  greet() {
    return `Hello, I am a ${this.type}.`;
  }
}

// create an instance of the class extension and call one of its methods
const sabre = new SpecificAnimal(
  "bitey",
  "orange",
  200,
  "mean",
  "sabre-tooth tiger"
);
console.log(sabre.greet());
