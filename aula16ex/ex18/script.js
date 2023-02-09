var listofNumbers = [];
var divElement = document.querySelector('div#res');
function addNumber2Array() {
    var inputElement = document.querySelector('input#inNum');
    var rawValue = inputElement === null || inputElement === void 0 ? void 0 : inputElement.value;
    if (!inputElement || !rawValue || rawValue.length == 0) {
        alert('Field is empty. Please, insert a valid number');
        return;
    }
    //Clears input
    inputElement.value = '';
    inputElement.focus();
    var numericalValue = Number(rawValue);
    if (numericalValue < 1 || numericalValue > 100) {
        alert('Input is out of range. Insert a number between 1 and 100!');
        return;
    }
    if (listofNumbers.indexOf(numericalValue) != -1) {
        alert('Number has already been added to the list');
        return;
    }
    listofNumbers.push(numericalValue);
    var optionElement = document.createElement('option');
    optionElement.value = numericalValue.toString();
    optionElement.innerHTML = "Number ".concat(numericalValue, " has been added.");
    var selectElement = document.querySelector('select#selRes');
    if (!selectElement || !divElement) {
        return;
    }
    selectElement.appendChild(optionElement);
    divElement.innerHTML = ''; //Clears the output display area
}
function printOutput() {
    if (listofNumbers.length == 0) {
        alert('There are no stored values in the list.');
        return;
    }
    var listSize = listofNumbers.length;
    //Initializations
    var max = listofNumbers[0];
    var min = listofNumbers[0];
    var sum = 0;
    listofNumbers.forEach(function (value) {
        max = value > max ? value : max;
        min = value < min ? value : min;
        sum = sum + value;
    });
    var average = sum / listSize;
    if (!divElement) {
        return;
    }
    //Shows output
    divElement.innerHTML = "<p>The list has ".concat(listSize, " numbers.</p>");
    divElement.innerHTML += "<p>The biggest number so far is ".concat(max, ".</p>");
    divElement.innerHTML += "<p>The lowest number so far is ".concat(min, ".</p>");
    divElement.innerHTML += "<p>The summation of the lists elements equals ".concat(sum, ".</p>");
    divElement.innerHTML += "<p>The average of the lists elements equals ".concat(average, "</p>");
}
