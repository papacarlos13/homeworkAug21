// HTML includes:
// <header>
//  <h1>Site Title</h1>
// <header>

// document.querySelector("header").outerHTML;
// returns:
//  <header>
//    <h1>Site Title</h1>
//  <header>

// document.querySelector("header").innerHTML;
// returns: <h1>Site Title</h1>

// document.querySelector(`header > h1`).innerHTML;
// returns: Site Title

// document.querySelector(`header`).textContent;
// returns:
//
//  Site Title
//

// document.querySelector(`header > h1`).textContent;
// returns: Site Title

// HTML includes:
// <main>
//  <h2>Some Header</h2>
//  <p>Some text. <a href="https://www.lipsum.com/">Lorem ipsum.</a></p>
// </main>

// document.querySelector("main > p").textContent;
// returns: Some text. Lorem ipsum.

// document.querySelector("main").textContent;
// returns:
//
//  Some Header
//  Some text. Lorem ipsum.
//

// print the outer HTML of the navigation bar
// const navBar = document.querySelector(".nav-bar");
// console.log(navBar.outerHTML);
// print the inner HTML of the navigation bar
// console.log(navBar.innerHTML);
// print the text content of the #class-schedule-list element
// console.log(document.querySelector("#class-schedule-list").textContent);
// select the classList for the first class-week, then add the class "week-1"
// const firstClassWeek = document.querySelector(".class-week");
// console.log(firstClassWeek, "Before");
// firstClassWeek.classList.add("week-1");
// console.log(firstClassWeek, "After");
// select the img element and add a src attribute
document.querySelector("img").src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=980:*";
// change the font color of the h1 element
document.querySelector("h1").style.color = "blue";