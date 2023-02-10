var inputNumber = null;
var selectElement = document.querySelector('select#results');
var inputElement = document.querySelector('input#innum');
function generate() {
    var inputValue = inputElement === null || inputElement === void 0 ? void 0 : inputElement.value;
    if (!inputValue || inputValue.length === 0 || !selectElement) {
        alert('Please, inserta a number in the box.');
        return;
    }
    inputNumber = Number(inputValue);
    selectElement.innerHTML = '';
    for (var index = 1; index <= 10; index++) {
        var multiplication = inputNumber * index;
        var optionElement = document.createElement('option');
        optionElement.value = multiplication.toString();
        optionElement.innerText = "".concat(inputNumber, "X").concat(index, " = ").concat(multiplication);
        selectElement.appendChild(optionElement);
    }
}
function getVal() {
    var selection = selectElement === null || selectElement === void 0 ? void 0 : selectElement.value;
    var divElement = document.querySelector('div#sel');
    if (!inputNumber) {
        return;
    }
    if (!selection || !divElement) {
        alert('Fatal Error!');
        return;
    }
    if (selection === 'init') {
        return;
    }
    var result = Number(selection);
    var fixedNumber = result / inputNumber;
    divElement.style.fontSize = '18';
    divElement.innerHTML = "".concat(inputNumber, " times ").concat(fixedNumber, " equals ").concat(result);
    //var chosenVal = document.querySelector('option#')
}
