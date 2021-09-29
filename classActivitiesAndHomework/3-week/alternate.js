let pizzaToppings = ["pepperoni", "sausage", "mushroom", "bacon"];
let greeting = [];

function greetCustomer() {
  pizzaToppings.splice(pizzaToppings.length - 1, 0, "and");
  for (let i = 0; i < pizzaToppings.length; i++) {
    greeting.push(" " + pizzaToppings[i]);
    // console.log(greeting);
  }
  console.log(
    "Welcome to Pizza House, our toppings are:" + greeting.toString()
  );
}
// greetCustomer();


function lotOfToppings(array) {
  return array;
}
let list = {
  size: "",
  crust: "",
  toppings: ""
};
function getPizzaOrder(size, crust, ...toppings) {
  list.size = size;
  list.crust = crust;
  list.toppings = toppings;
 

  if (toppings.length === 2) {
    console.log(`One ${size} ${crust} crust pizza with ${toppings[0]} and ${toppings[1]} coming up!`);
  } else if (toppings.length === 1) {
    console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up!`);
  } else if (toppings == "") {
    console.log(`One ${size} ${crust} crust pizza with cheese coming up!`);
  } else {
    toppings.splice(toppings.length - 1, 0, " and");
console.log(`One ${size} ${crust} crust pizza with ${toppings.toString()} coming up!`);
    toppings.splice(toppings.length - 2, 1);
  }
  return list;
}
// console.log(list);
let pizza = {};
function preparePizza(list) {
  console.log("...Cooking pizza...");
  pizza.size = list.size;
  pizza.crust = list.crust;
  pizza.toppings = list.toppings;
  return pizza;
}

function servePizza(pizza) {
  if (pizza.toppings.length === 2) {
    console.log(`Order up! Here's your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings[0]} and ${pizza.toppings[1]}. Enjoy!`);
  } else if (pizza.toppings.length === 1) {
    console.log(`Order up! Here's your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings}. Enjoy!`);
  } else if (pizza.toppings == "") {
    console.log(`Order up! Here's your ${pizza.size}, ${pizza.crust} crust pizza with cheese. Enjoy!`);
  } else {
    pizza.toppings.splice(pizza.toppings.length - 1, 0, " and ");
    console.log(`Order up! Here's your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings}. Enjoy!`);
  }
  // console.log(
  //   `Order up! Here's your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings}. Enjoy!`
  // );
}
greetCustomer();
getPizzaOrder("large", "thick", "bacon", "sausage", "pepperoni");
preparePizza(list);
servePizza(pizza);