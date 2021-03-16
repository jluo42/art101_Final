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

var link1 = "https://www.gardeningknowhow.com/ornamental/cacti-succulents/burros-tail/burros-tail-care.htm";
var link2 = "https://www.gardeningknowhow.com/houseplants/jade-plant/jade-plant-care.htm";
var link3 = "https://www.gardeningknowhow.com/houseplants/shamrock/growing-shamrock-plants.htm";
var link4 = "https://www.epicgardening.com/golden-pothos-devils-ivy/";
var link5 = "https://www.apartmenttherapy.com/chinese-money-plants-are-rare-but-easy-to-grow-244300";
var links = [link1, link2, link3, link4, link5];
// open information browser when the button is clicked.
function changeBrowser(idNumber) {
  console.log(links);
  for(var i = 0; i <= 4; i++) {
    if(i == idNumber){
      window.open(link1, "_blank");
    }
  }
}

var opacity = 0;
var intervalID = 0;

function changeImage(idNum) {
  console.log("I am being clicked");
  intervalID = setInterval(hide, 20);
  if (idNum == 2){
    console.log("test");
  }
}

function hide () {
  var img = document.getElementById("plant2");
  opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));

  if(opacity > 0) {
    opacity = opacity - 0.1;
    img.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

function showInfograph() {

}
