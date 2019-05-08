// checkbox in first form 
const firstCheckbox = document.querySelector('#show-password1');
// Password Input in first form 
const firstInput = document.querySelector('form input[type="password"]');
// checkbox in second form
const lastCheckbox = document.querySelector('#show-password2');
// Inputs in second form
const secondInputs = document.querySelectorAll('form:last-of-type input[type="password"]');

// first form

document.addEventListener('change', () => {
  if(firstCheckbox.checked) {
    firstInput.setAttribute('type', 'text');
  } else {
    firstInput.setAttribute('type', 'password');
  }
},false);

// second form
document.addEventListener('change', () => {
  if(lastCheckbox.checked) {
    secondInputs.forEach(input => input.setAttribute('type', 'text'));
  } else {
    secondInputs.forEach(input => input.setAttribute('type', 'password'))
  }
},false);
