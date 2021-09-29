document.querySelector("#Arch").title = "Please don't double-click the Arch.";

//or it could be done like this:
// document
//   .querySelector("#Arch")
//   .addEventListener(
//     "mouseover",
//     event => (event.target.title = "Please don't double-click the Arch.")
//   );

document
  .querySelector("#Arch")
  .addEventListener("dblclick", () =>
    alert("How dare you - that's a national monument!")
  );

document.querySelector("footer > h4").style.cssText =
  "font-weight: 800; font-family: Georgia";
