//returns an array of all paragraph elements
// document.getElementsByTagName("p");

// returns an array of all elements with the class "my-class"
// document.getElementsByClassName("my-class");

// returns the (one) element with the id "my-ID"
// document.getElementById("my-ID");

// returns the first paragraph element
document.querySelector("p");

// returns the element with the id "my-ID"
document.querySelector("#my-ID");

// returns an array of all elements with the class "my-class"
document.querySelectorAll(".my-class");


// select all unordered list (ul) elements
console.log(document.getElementsByTagName("ul"));
//querySelectorAll("ul");
// select all elements with the class "class-week"
console.log(document.getElementsByClassName("class-week"));
//
// select all elements with the class "nav-bar"
console.log(querySelectorAll(".nav-bar"))

// select the element with the id "dog-picture" and save it to a variable
const dogPic = document.querySelector("#dog-picture");
