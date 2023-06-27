function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);

    if (result || result === 0) {
      display.value = result;
    } else {
      display.value = '';
    }
}

function deleteLastCharacter() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

