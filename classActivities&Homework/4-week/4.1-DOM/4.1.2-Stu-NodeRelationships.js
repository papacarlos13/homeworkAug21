// Accessing Elements via Node Relationships
// You can use the following node properties to navigate between nodes with JavaScript:

// NOTE: These node properties must be accessed from an element node. 
// Ex: document.querySelector('p').parentElement

// .children - returns an array-like list of all of the element's children nodes
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .parentElement

// select the root node
console.log(document.getElementsByTagName("html"));
// select the last child of the root node
console.log(document.querySelector("html").lastElementChild);
// select all the children of the body element
console.log(document.querySelector("body").children);
// select the next sibling of the h2 node
console.log(document.querySelector("h2").nextElementSibling);
// select the parent element of the h1 node
console.log(document.querySelector("h1").parentElement);