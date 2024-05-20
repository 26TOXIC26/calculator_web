let displayValue = "0";

document.getElementById('display').value = displayValue;

function addToDisplay(value) {
    let operator = ["+", "-", "*", "/", "%", "**"];
    let lastChar = displayValue[displayValue.length - 1];
    if (displayValue === "0" && value !== "." && value !== "+" && value !== "*" && value !== "/" && value !== "%" && value !== "**") {
        displayValue = value;
    }
    else if (operator.includes(lastChar) && operator.includes(value)) {
        displayValue = displayValue;
    }
    else {
        displayValue += value;
    }
    console.log(displayValue);
    document.getElementById('display').value = displayValue;
}

function equal() {
  displayValue = eval(displayValue);
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  document.getElementById('display').value = displayValue;
}

function deleteLast() {
  if (displayValue.length === 1) {
    displayValue = "0";
  }
  else if (displayValue[displayValue.length - 1] === "*" && displayValue[displayValue.length - 2] === "*") {
    displayValue = displayValue.slice(0, -2);
  }
  else
  {
    displayValue = displayValue.slice(0, -1);
    console.log(displayValue);
  }
  document.getElementById('display').value = displayValue;
}