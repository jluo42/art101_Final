AOS.init({
  offset: 400,
  duration: 2000
});

//get the button with id topbutton;
topButton = document.getElementById("topButton");
console.log(topButton);
topButton.onload = scrollFunction();
// WHen the user starts scrolling down the top it will show the button;
window.onscroll = function() {
  scrollFunction();
};

// function for reveal scrolling;
function scrollFunction() {
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// when the top button is clicked it will go to the top;
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
