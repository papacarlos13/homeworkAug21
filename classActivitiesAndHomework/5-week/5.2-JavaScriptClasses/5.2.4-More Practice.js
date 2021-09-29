// refactor your Animal function constructor and methods to use the class keyword
class Animal {
  constructor(species, color, hair) {
    this.species = species;
    this.color = color;
    this.hair = hair;
  }
  describe() {
    return `The ${this.color} ${this.species} is ${this.hair}.`;
  }
}

//instance
const thatDog = new Animal("dog", "yellow", "fuzzy");
console.log(thatDog.describe());

// extend the Animal class with a type of animal
class Binomial extends Animal {
  constructor(species, color, hair, genus) {
    super(species, color, hair);
    this.genus = genus;
  }
  // add some unique methods and properties to the class extension
  describe() {
    return `The ${this.species} belongs to the genus ${this.genus}.`;
  }
}

// create an instance of the class extension and call one of its methods
const aDog = new Binomial("dog", "any", "any", "canis");
console.log(aDog.describe());
