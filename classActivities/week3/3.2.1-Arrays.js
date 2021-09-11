// create an Array using an Array literal
let x = 1;
const arrayFibbonici = [x, 1, 2, 3, 5, 8, 13];

// access the 1st item in the Array
// console.log(arrayFibbonici[0]);
// arrays are zero-indexed

// access the last item in the Array
// console.log(arrayFibbonici[6]);

// print the length of the Array
// console.log(arrayFibbonici.length);

// use the length property to access the last item in the Array
// console.log(arrayFibbonici[arrayFibbonici.length -1]);
// using the property as an [index]

// with for...of, loop over the Array,
for (let sequence of arrayFibbonici) {
  console.log(sequence);
}
// instantiates new variable (sequence) which loops over the array using 'of' keyword
// which is why it needs a let (it changes)
// will print the entire sequence of the array

console.log("");
// line break for clarity in the console

// modify the value
for (let sequence of arrayFibbonici) {
  console.log(sequence + 10);
}
// will change the value of each element in the array by adding 10

console.log("");

// and add to a different Array
let newArray = [];
for (let sequence of arrayFibbonici) {
  let timesTen = sequence * 10;
  newArray += " " + timesTen;
}
console.log("This is the Fibbonaci sequence times 10:", newArray);
//based on Johan's solution (had to add a string with a space so that elements would be spaced in newArray)
//why are we not using array.push?