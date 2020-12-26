function infoDesign() {
  document.getElementById("service").style.display = "none";
  document.getElementById("information").style.display = "block ";
  document.getElementById("title").innerHTML = "Design Website";
}

function infoCode() {
  document.getElementById("service").style.display = "none";
  document.getElementById("information").style.display = "block ";
  document.getElementById("title").innerHTML = "Website Coded.";
  document.getElementById("item2").innerHTML = "Source Files.";
  document.getElementById("item3").innerHTML = "Website Designed.";
  document.getElementById("item4").innerHTML = "Hosting.";
  document.getElementById("item1").innerHTML = "Website Coded in HTML and CSS.";
}

function infoCodeDesign() {
  document.getElementById("service").style.display = "none";
  document.getElementById("information").style.display = "block ";
  document.getElementById("title").innerHTML = "Design & Code Website";
  document.getElementById("price").innerHTML = "20$/HOUR";
  document.getElementById("item1").innerHTML = "Website Designed & Coded.";
  document.getElementById("item2").innerHTML = "Source Files.";
  document.getElementById("item3").innerHTML = "";
  document.getElementById("item4").innerHTML = "Hosting.";
}

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
