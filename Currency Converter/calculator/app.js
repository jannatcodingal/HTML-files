// Get the display element
const display = document.querySelector('.display');

// Function to append values to display
function appendToDisplay(value) {
    if (display.value === 'Error') {
        clearDisplay();
    }
    display.value += value;
}

// Function to calculate the result
function calculate() {
    try {
        // Replace × with * and ÷ with / if needed
        let expression = display.value;
        const result = eval(expression);

        // Check if result is valid
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to erase the last character
function eraseLast() {
    display.value = display.value.slice(0, -1);
}

// Optional: Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['+', '-', '*', '/'];

    if (numbers.includes(key) || operators.includes(key) || key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        eraseLast();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    }
});