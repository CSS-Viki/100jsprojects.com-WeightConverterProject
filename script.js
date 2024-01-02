let weightEl = document.getElementById("weight");
let calculatedKgs = document.getElementById("calculated-kgs");
const errorMessage = document.getElementById("error");

  weightEl.addEventListener("input", () => {
    let inputValue = parseFloat(weightEl.value); // to explicitly convert the input to a number and then check if it's a valid number.

    if (!isNaN(inputValue) && inputValue > 0) {
      let result = inputValue * 0.453592; // Output to kilograms
      calculatedKgs.textContent = result.toFixed(2);
      errorMessage.textContent = ""; // Clear error message, if it was there

      //Clear result after 10 seconds
    setTimeout(() => {
      calculatedKgs.textContent = "";
      weightEl.value = "";
    }, 10000);
    } else {
      errorMessage.textContent = "Please enter a valid number!";

      //Clear message after 3 seconds
      setTimeout(() => {
        errorMessage.textContent = "";
      }, 3000);
    }

    
  });

