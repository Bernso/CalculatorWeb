function calculate() {
    // Get input
    var numInputs = document.querySelectorAll('.numInput');
    var numbers = [];
    numInputs.forEach(function(input) {
        numbers.push(parseFloat(input.value));
    });
    var operation = document.getElementById('operation').value;

    // calculate based on selected operator
    var result;
    switch(operation) {
        case 'Add':
            result = numbers.reduce(function(total, num) {
                return total + num;
            }, 0);
            break;

        case 'Subtract':
            result = numbers.reduce(function(total, num) {
                return total - num;
            });
            break;

        case 'Multiply':
            result = numbers.reduce(function(total, num) {
                return total * num;
            }, 1);
            break;

        case 'Divide':
            result = numbers.reduce(function(total, num) {
                return total / num;
            });
            break;

        case 'Square':
            if (numbers.length === 1) {
                result = Math.pow(numbers[0], 2);
            } else {
                result = "Invalid operation: Square requires exactly one number.";
            }
            break;

        case 'Square Root':
            if (numbers.length === 1) {
                result = Math.sqrt(numbers[0]);
            } else {
                result = "Invalid operation: Square requires exactly one number.";
            }
            break;

        default:
            result = "Invalid operation";
    }

    // result in calculation box
    var calculationResult = document.getElementById('calculationResult');
    calculationResult.textContent = "Result: " + result;
    calculationResult.style.opacity = 1; // visible

    // result in answer box
    var answerResult = document.getElementById('answerResult');
    answerResult.textContent = result;
    answerResult.style.opacity = 1; // visible
}


// add a new input field
function addInput() {
    var inputContainer = document.getElementById('numberInputs');
    var newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.className = 'numInput';
    newInput.placeholder = 'Enter a number';
    inputContainer.appendChild(newInput);
}
