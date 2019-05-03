

// This highlights the H1 title into yellow when mouse hovers over it
const myH1 = document.querySelector("h1");
myH1.addEventListener("mouseenter", function( event ) {   
event.target.style.color = "yellow";

// reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
