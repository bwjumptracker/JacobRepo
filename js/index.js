

// This highlights the H1 title into yellow when mouse hovers over it
const myH1 = document.querySelector("h1");
myH1.addEventListener("mouseenter", function( event ) {   
event.target.style.color = "yellow";

// reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);



const bannerOverlay = document.querySelector(".overlay");

bannerOverlay.addEventListener("mouseenter", (event) => {
    event.target.style.boxShadow = "0px 0px 20px 10px rgba(0, 0, 0, 0.5)";
    event.target.style.transition = "box-shadow 0.1s ease-in-out";
    event.stopPropagation();
});

bannerOverlay.addEventListener('mouseleave', (event) => {
    event.target.style.boxShadow = "0px 0px 10px 5px rgba(0, 0, 0, 0.50)";
    event.target.style.transition = "box-shadow 0.3s ease-in-out";
    event.stopPropagation();
});