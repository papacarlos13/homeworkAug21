document
  .querySelector("#logo-img")
  .addEventListener(
    "mouseover",
    event =>
      (event.target.title =
        "The Groundhog is ready to help you forecast the next 6 weeks!")
  );

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
