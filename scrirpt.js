let displayValue = "0";

document.getElementById('display').value = displayValue;

function addToDisplay(value) {
    let operator = ["+", "-", "*", "/", "%", "**"];
    let lastChar = displayValue[displayValue.length - 1];
    if (displayValue === "0" && value !== "." && value !== "+" && value !== "*" && value !== "/" && value !== "%" && value !== "**") {
        displayValue = value;
    }
    else if (operator.includes(lastChar) && operator.includes(value) || (lastChar === "." && operator.includes(value)) || (lastChar === "." && value === ".") || (lastChar === "." && value === "=") || (operator.includes(lastChar) && value === ".") || (displayValue.includes(".") && value === ".")) {
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
  displayValue = displayValue.toString();
  if (displayValue.length === 1)
    displayValue = "0";
  else if (displayValue[displayValue.length - 1] === "*" && displayValue[displayValue.length - 2] === "*")
    displayValue = displayValue.slice(0, -2);
  else
    displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key >= '0' && key <= '9') {
      addToDisplay(key);
  } else if (key === '.') {
      addToDisplay(key);
  } else if (key === '=' || key === 'Enter') {
      equal();
  } else if (key === 'Backspace') {
      deleteLast();
  } else if (key === 'Escape') {
      clearDisplay();
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      addToDisplay(key);
  }
});