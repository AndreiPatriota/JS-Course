var beginInputElement = document.querySelector('input#inbegin');
var endInputElement = document.querySelector('input#inend');
var stepInputElement = document.querySelector('input#instep');
var divElement = document.querySelector('div#res');
function doTheCount() {
    var start = beginInputElement === null || beginInputElement === void 0 ? void 0 : beginInputElement.value;
    var end = endInputElement === null || endInputElement === void 0 ? void 0 : endInputElement.value;
    var step = stepInputElement === null || stepInputElement === void 0 ? void 0 : stepInputElement.value;
    if (!start || !end || !step || !divElement) {
        alert('Fatal error');
        return;
    }
    if (start.length === 0) {
        alert('Please, insert a beginning number');
        divElement.innerHTML = 'Impossible to count';
        return;
    }
    if (end.length === 0) {
        alert('Please, insert an ending number');
        divElement.innerHTML = 'Impossible to count';
        return;
    }
    if (step.length === 0) {
        alert('Please, insert a step');
        divElement.innerHTML = 'Impossible to count';
        return;
    }
    var startNumber = Math.abs(Number(start));
    var endNumber = Math.abs(Number(end));
    var stepNumber = Math.abs(Number(step));
    var factor = 1;
    stepNumber = stepNumber != 0 ? stepNumber : 1;
    divElement.innerHTML = 'Counting: <br>';
    if (startNumber > endNumber) {
        startNumber *= -1;
        endNumber *= -1;
        factor = -1;
    }
    for (var index = startNumber; index <= endNumber; index += stepNumber) {
        divElement.innerHTML += "".concat(factor * index, " &#128073; ");
    }
    divElement.innerHTML += "&#127987;";
}
