AOS.init({
  offset: 400,
  duration: 2000
});

var testButton = document.getElementById("plant_button");
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');

testButton.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&appid=674717bee219fdfe992b505e98be329b')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];
      var humidityValue = data['main']['humidity'];
      var realTemp = ((tempValue - 273.15) * 9/5 + 32);
      console.log(realTemp);

      city.innerHTML = nameValue;
      temp.innerHTML = "The Temperature is: " + realTemp + " °F";
      desc.innerHTML = descValue;
      humidity.innerHTML = "Humidity is: " + humidityValue + "%";
    })
  .catch(err => alert("Wrong City Name"))
})

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
      window.open(links[i], "_blank");
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
