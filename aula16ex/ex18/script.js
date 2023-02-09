const listofNumbers = [Number()] //Array that will store the entered values
listofNumbers.length = 0
const divElement = document.querySelector('div#res') //Html div element that holds the output display

function addNum2Array() {/*addNum2Array() starts here*/
    let inputElement = document.querySelector('input#inNum')
    let rawValue = inputElement.value

    //Clears input
    inputElement.value = ''
    inputElement.focus()

    if (rawValue.length == 0) {
        alert('Field is empty. Please, insert a valid number')
        return
    }

    let numericalValue = Number(rawValue)

    if (numericalValue < 1 || numericalValue > 100) {
        alert('Input is out of range. Insert a number between 1 and 100!')
        return
    }

    if (listofNumbers.indexOf(numericalValue) != -1) {
        alert('Number has already been added to the list')
        return
    }

    listofNumbers.push(numericalValue)

    let optionElement = document.createElement('option')
    optionElement.value = numericalValue
    optionElement.innerHTML = `Number ${numericalValue} has been added.`
    document.querySelector('select#selRes').appendChild(optionElement)

    divElement.innerHTML = ''//Clears the output display area
}

function printRes() {/*printRes() starts here*/

    if(listofNumbers.length == 0) {
        alert('There are no stored values in the list.')
        return
    }

    let listSize = listofNumbers.length 

    //Initializations
    let max = Number(listofNumbers[0])
    let min = Number(listofNumbers[0])
    let sum = 0

    listofNumbers.forEach((value)=>{
        max = value > max ? value : max;
        min = value < min ? value : min;
        sum += value;
    })

    let average = sum / listSize

    //Shows output
    divElement.innerHTML = `<p>The list has ${listSize} numbers.</p>`
    divElement.innerHTML += `<p>The biggest number so far is ${max}.</p>`
    divElement.innerHTML += `<p>The lowest number so far is ${min}.</p>`
    divElement.innerHTML += `<p>The summation of the lists elements equals ${sum}.</p>`
    divElement.innerHTML += `<p>The average of the lists elements equals ${average}</p>`
}