// const me = {
//   name: "Carlos",
//   age: 38
// };
// const a = "age";

// me.name; //will print Carlos
// me["name"]; //will print Carlos
// me[name]; //error: name is not defined (variable)

//me[a];//the const is set to the key "age" so will print 38
//me["a"]; //undefined because looking for string "a"

// create an object with at least four properties, each with a different data type
// name one of the four properties "collection" and set its value to an Array or Object

// const obj = {
//   first: 1,
//   second: 2,
//   third: 3,
//   collection : {
//     howdy: "stranger",
//     hi: "hello",
//   }
// };
// 
// access a value in "collection" property
//obj.collection.hi;

//Johan's solution to rest of activity:
// Nested Arrays and Objects

const keys = ["key", "1", "method", "favorites", "list"];
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// fill in your favorite movie and color below

obj["favorites"] = {
  movie: "enough",
  number: 19,
  color: "gray"
};

obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// how many lines will the following for...of statement print? (== 5)
// what do you expect to see on each line?

for (let key of keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// use a template literal to print a sentence about your favorite movie and color

console.log(
  `my favorite movie is ${obj.favorites.movie}, and my favorite color is ${obj.favorites.color}`
);

// access the values "b", 4, and 6 from obj.list
// the list is an array with an array and an object nested within
console.log(obj.list[1]);
//array is zero-indexed so b is number 1

console.log(obj.list[4][1]);
//the nested array is the fourth item in the (zero-indexed) array

console.log(obj.list[obj.list.length - 1].f);
//accessing the last item in the array, which is an object, and accessing the "f" key in that object