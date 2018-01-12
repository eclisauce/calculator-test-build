$(document).ready(function(){
  let currentEntry = 0;
  let result = 0;
  let operation = null;
  let prevEntry = 0;
  updateScreen(result);

  $('.button').on('click', function(evt) {
    let buttonPressed = $(this).html();
    if (buttonPressed === "C") {
     result = 0;
     currentEntry = '0';
   } else if (buttonPressed === "+/-") {
     currentEntry *= -1;
   } else if (isNumber(buttonPressed)) {
     if (currentEntry === '0') currentEntry = buttonPressed;
     else currentEntry = currentEntry + buttonPressed;
   } else if (isOperator(buttonPressed)) {
     prevEntry = parseFloat(currentEntry);
     operation = buttonPressed;
     currentEntry = '';
   } else if(buttonPressed === '%') {
     currentEntry = currentEntry / 100;
   } else if (buttonPressed === '=') {
     currentEntry = operate(prevEntry, currentEntry, operation);
     operation = null;
   }
    updateScreen(currentEntry);
    });


  });

function updateScreen(displayValue) {
    displayValue = displayValue.toString();
    $('.window').html(displayValue.substring(0, 10));
  };

    function isNumber(value) {
    return !isNaN(value);
  }

  function isOperator(value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
  };

  function operate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);

    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
  }
