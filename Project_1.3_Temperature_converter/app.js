(function() {

// DOM VARIABLES
const celciusField = document.querySelector('#celcius');
const farenheitField = document.querySelector('#farenheit');


document.addEventListener('input', function(event) {
  if(event.target.matches('#farenheit')) {
    convertToCelcius(event);
  }
  else if(event.target.matches('#celcius')) {
    convertToFarenheit(event);
  }
});


function convertToCelcius(event) {
  //Calculate value of celcius input
  let celcius = parseInt(Math.round(event.target.value - 32) * (5/7));
  celciusField.value = celcius;
}

function convertToFarenheit(event) {
  //Calculate value of farenheit input 
  let farenheit = parseInt(Math.round(event.target.value) * 9/5) + 32;
  farenheitField.value = farenheit;
}

} ());


