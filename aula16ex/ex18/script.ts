const listofNumbers: Number[] = []
const divElement: HTMLDivElement | null = document.querySelector('div#res')

function addNumber2Array() {/*addNum2Array() starts here*/
    let inputElement: HTMLInputElement | null = (document.querySelector('input#inNum'))

    let rawValue = inputElement?.value

    if (!inputElement || !rawValue || rawValue.length == 0) {
        alert('Field is empty. Please, insert a valid number')
        return
    }

    //Clears input
    inputElement.value = ''
    inputElement.focus()

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

    let optionElement: HTMLOptionElement | null = document.createElement('option')
    optionElement.value = numericalValue.toString()
    optionElement.innerHTML = `Number ${numericalValue} has been added.`

    let selectElement: HTMLSelectElement | null = document.querySelector('select#selRes')

    if (!selectElement || !divElement) {
        return
    }

    selectElement.appendChild(optionElement)
    divElement.innerHTML = ''//Clears the output display area
}

function printOutput() {/*printRes() starts here*/

    if (listofNumbers.length == 0) {
        alert('There are no stored values in the list.')
        return
    }

    let listSize = listofNumbers.length

    //Initializations
    let max = listofNumbers[0]
    let min = listofNumbers[0]
    let sum: number = 0

    listofNumbers.forEach((value) => {
        max = value > max ? value : max;
        min = value < min ? value : min;
        sum = sum + <number>value;
    })

    let average = sum / listSize

    if(!divElement) {
        return
    }

    //Shows output
    divElement.innerHTML = `<p>The list has ${listSize} numbers.</p>`
    divElement.innerHTML += `<p>The biggest number so far is ${max}.</p>`
    divElement.innerHTML += `<p>The lowest number so far is ${min}.</p>`
    divElement.innerHTML += `<p>The summation of the lists elements equals ${sum}.</p>`
    divElement.innerHTML += `<p>The average of the lists elements equals ${average}</p>`
}



