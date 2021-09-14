// Events & Event Handling
// Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

// Common Events
// click, dblclick
// mousedown, mouseup
// mouseover, mouseout
// focus, blur
// keydown, keyup, keypress
// See the MDN List of DOM Events

// Adding/Removing Event Listeners
// .addEventListener(event, callback)
// .removeEventListener(event, callback)
// NOTE: The callback in an event listener accepts a single parameter:
// the Event object describing the event which has occurred, and it returns nothing.

// a callback function that doesn't use the Event object that was listened for
// document
//   .querySelector(".button")
//   .addEventListener("click", () => console.log("The button was clicked."));

// a callback function that changes the background color of the target/"source" of the event
// document
//   .querySelector(".button")
//   .addEventListener(
//     "click",
//     (event) => (event.target.style.background - color = "red")
//   );

// add an event listener to the dog picture that listens for a "click" and gives an alert
document
  .querySelector("#dog-picture")
  .addEventListener("dblclick", () => alert("The image was double-clicked"));
// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document
  .querySelector("#class-schedule-list")
  .addEventListener(
    "mouseover",
    event => (event.target.style.backgroundColor = "red")
  );
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document
  .querySelector("body")
  .addEventListener("keypress", event => console.log(event.key));
