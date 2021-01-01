var btnContainer = document.getElementsByClassName("link");

// Loop through the Li elements and add the active class to the current/clicked Li element
for (var i = 0; i < btnContainer.length; i++) {
  btnContainer[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

var IsOpen = false;
var navbar = document
  .getElementById("navbar-links")
  .getElementsByTagName("ul")[0];
var navbarBackground = document.getElementById("nav-background");

function open_nav() {
  navbar.style.left = "40px";
  navbarBackground.style.left = "0px";
  IsOpen = true;
}

function close_nav() {
  navbar.style.left = "-150px";
  navbarBackground.style.left = "-250px";
  IsOpen = false;
}

var btn = document.getElementById("navbutton");

btn.addEventListener(
  "click",
  function () {
    if (IsOpen) {
      close_nav();
    } else {
      open_nav();
    }
  },
  false
);
