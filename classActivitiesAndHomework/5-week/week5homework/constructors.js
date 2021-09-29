// In a new .js file, create a few classes. Create one "general category" class, then two more specific classes which extend from the first class.

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

// extend class
class Binomial extends Animal {
  constructor(species, color, hair, genus) {
    super(species, color, hair);
    this.genus = genus;
  }
  //replace earlier method
  describe() {
    return `The "${this.species}" belongs to the genus "${this.genus}".`;
  }
}

// instance and calling new method
const aDog = new Binomial("dog", "any", "any", "Canis");
console.log(aDog.describe());

// another extend
class Classify extends Binomial {
  constructor(species, color, hair, genus, order) {
    super(species, color, hair, genus);
    this.order = order;
  }
  // replace earlier method
  describe() {
    return `The "${this.species}" is classified in the genus "${this.genus}" and the order "${this.order}".`;
  }
}
// instance and calling new method
const whatsADog = new Classify("dog", "any", "any", "Canis", "Carnivora");
console.log(whatsADog.describe());
