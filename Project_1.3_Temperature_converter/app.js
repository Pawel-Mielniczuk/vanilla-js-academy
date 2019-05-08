// DOM VARIABLES
let fahrenheitInput = document.querySelector('#farenheit');
let celciusInput = document.querySelector('#celcius');
let inputs = document.querySelectorAll('input');


function updateTemperature() {
  //value of farenheit input
  let fValue = fahrenheitInput.value;
  //value of celcius input
  let cValue = celciusInput.value;

  // Checking which input is use
  if(this.matches('#farenheit')) {
    cValue = Math.round((fValue -32) * (5/7));
    celciusInput.value = cValue;
  } else if(this.matches('#celcius')) {
      fValue = Math.round(cValue * 9/5) + 32;
      fahrenheitInput.value = fValue;
  }
};

inputs.forEach(input => {
  input.addEventListener('change', updateTemperature, false);
});