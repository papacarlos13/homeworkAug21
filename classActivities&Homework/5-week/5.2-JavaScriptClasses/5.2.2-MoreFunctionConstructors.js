// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.
function Animal (name, color, weight, personality){
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.personality = personality;
    this.bio = `${this.name} is ${this.color} and weighs ${this.weight} pounds`;
}
// create a new instance on an Animal
const garfield = new Animal("Garfield", "orange", 15, "sassy");
console.log(garfield.bio);
// add methods to the Animal prototype
Animal.prototype.greet = function (){
    return `Hey there`
}
console.log(garfield.greet());
// attach a method directly to the Animal instance that "overwrites" a prototype method
garfield.greet = function(){
    return `Go away`;
}
console.log(garfield.greet());