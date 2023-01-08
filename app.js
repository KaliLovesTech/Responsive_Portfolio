// set variable hamburgerToggle equal to the id hamburgerToggle from html
const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#navbar");

// adds an event listener. This will call the function "onHamburgerClick" when the button is interacted with
hamburgerToggle.addEventListener("click", onHamburgerClick);

// wrtie a function for onHamburgerClick
function onHamburgerClick() {
  if (navbar.classList.contains("open")) {
    navbar.classList.remove("open");
  } else {
    navbar.classList.add("open");
  }
}
