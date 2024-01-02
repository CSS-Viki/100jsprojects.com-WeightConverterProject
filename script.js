let weightEl = document.getElementById("weight");
let calculatedKgs = document.getElementById("calculated-kgs");
const errorMessage = document.getElementById("error");

function convertion() {
  let inputValue = +weightEl.value; // to explicitly convert the input to a number.

  if (!isNaN(inputValue) && inputValue > 0) {
    let result = inputValue * 0.453592;
    calculatedKgs.textContent = result.toFixed(2);
    errorMessage.textContent = "";

    setTimeout(() => {
      weightEl.value = "";
      calculatedKgs.textContent = "";
    }, 10000);
  } else {
    errorMessage.textContent = "Please enter a valid number!";
    setTimeout(() => {
      errorMessage.textContent = "";
    }, 3000);
  }
}
weightEl.addEventListener("input", convertion);
