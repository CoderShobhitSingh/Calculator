document.addEventListener('DOMContentLoaded', (event) => {
    let inputField = document.querySelector('.input');
    let buttons = document.querySelectorAll('.button');
    let inputString = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        let value = button.textContent;
  
        if (value === 'C') {
          // Clear the input
          inputString = '';
        } else if (value === '=') {
          // Evaluate the expression
          try {
            inputString = eval(inputString).toString();
          } catch (e) {
            inputString = 'Error';
          }
        } else if (value === '%') {
          // Calculate percentage
          try {
            inputString = (eval(inputString) / 100).toString();
          } catch (e) {
            inputString = 'Error';
          }
        } else {
          // Append the value to input string
          inputString += value;
        }
  
        // Update the input field
        inputField.value = inputString;
      });
    });
  });
  