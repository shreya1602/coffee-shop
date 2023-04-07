// Change Background Header
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// Show Scroll Up

// Scroll Sections Active Link

// Scroll Reveal Animation

// Contact Us Modal

let modal = document.getElementById("myModal");
// Get the Button that opens the modal
let btn = document.getElementById("myBtn");
// Get the Span Element That Closes The Modal
var span = document.getElementsByClassName("close")[0];

// When The User Click the Button Modal will Open
btn.onclick = function () {
  modal.style.display = "block";
};

// When User Click on Span (x) close the Modal
span.onclick = function () {
  modal.style.display = "none";
};
// When User Click anywhere outside of the modal,close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
