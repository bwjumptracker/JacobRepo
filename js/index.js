

// This highlights the H1 title into yellow when mouse hovers over it
const myH1 = document.querySelector("h1");
myH1.addEventListener("mouseenter", function( event ) {   
event.target.style.color = "yellow";

// reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);




//Borrowed this from Dylan. Too cool not to use! 
const bannerOverlay = document.querySelector(".overlay");

bannerOverlay.addEventListener("mouseenter", (event) => {
    event.target.style.boxShadow = "0px 0px 20px 10px rgba(0, 0, 0, 0.5)";
    event.target.style.transition = "box-shadow 0.1s ease-in-out";
    event.stopPropagation();
});

bannerOverlay.addEventListener("mouseleave", (event) => {
    event.target.style.boxShadow = "0px 0px 10px 5px rgba(0, 0, 0, 0.50)";
    event.target.style.transition = "box-shadow 0.3s ease-in-out";
    event.stopPropagation();
});


//custom alert for first button
const btn = document.querySelectorAll('button');

btn[0].addEventListener('click', (event) => {
    alert("You are about to jump out out of the gym!");
});

//custom alert for second button

btn[1].addEventListener('click', (event) => {
  alert("Let us show you how to get those hops!");
});



//tiny increase in size of images on mouseover

const images = document.querySelectorAll("img");

images.forEach ( images => {
    images.addEventListener("mouseover", (event) => 
    event.target.style.transform = "scale(1.005)");
});


//reverts image back to orignal size after hover

images.forEach ( images => {
    images.addEventListener("mouseleave", (event) => event.target.style.transform = "scale(1.0)");
});


//changes background color when your cursor goes over it

const testBoxes = document.querySelectorAll('.test-h3');

testBoxes[0].addEventListener('mouseenter', (event) => {
    event.target.style.background = 'yellow';
});

testBoxes[1].addEventListener('mouseenter', (event) => {
    event.target.style.background = 'yellow';
});

testBoxes[2].addEventListener('mouseenter', (event) => {
    event.target.style.background = 'yellow';
});


//reverts the background to original after you move your mouse away

testBoxes.forEach(function(item) {
    returnToWhite(item);
});

function returnToWhite(item) {
    item.addEventListener("mouseout", function(event) {
        item.style.background = "white";
    })};