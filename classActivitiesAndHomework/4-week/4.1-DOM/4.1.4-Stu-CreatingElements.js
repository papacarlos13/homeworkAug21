// To add a new HTML element to the DOM, you must first create the new element before appending it. 
// Use the following DOM methods to add or remove elements:

// .createElement()
// .appendChild()
// .removeChild(child) - deletes child from the selected parent element
// .remove() - deletes selected child element
// create the new 'p' element
// const newParagraph = document.createElement("p");
// append the new element as the last child element to 'main'
// document.querySelector("main").appendChild(newParagraph);

// Two ways to delete the element:

// From the parent...
// let childToRemove = document.querySelector("main").lastChild;
// document.querySelector("main").removeChild(childToRemove);

// From the element itself...
// childToRemove.remove();

// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");

// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar > p").remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);
// create two new list item (li) elements, and add some text to them
const listItem = document.createElement("li");
const listItem2 = document.createElement("li");
listItem.textContent = "first new list item";
listItem2.textContent = "second new list item";
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listItem);
document.querySelector(".nav-bar > ul").appendChild(listItem2);