let inputNumber: number | null = null
const selectElement: HTMLSelectElement | null = document.querySelector('select#results')
const inputElement: HTMLInputElement | null = document.querySelector('input#innum')

function generate() {
    let inputValue = inputElement?.value

    if (!inputValue || inputValue.length === 0 || !selectElement) {
        alert('Please, inserta a number in the box.')
        return
    }

    inputNumber = Number(inputValue)
    selectElement.innerHTML = ''

    for (let index = 1; index <= 10; index++) {
        let multiplication = <number>inputNumber * index
        let optionElement = document.createElement('option')
        optionElement.value = multiplication.toString()
        optionElement.innerText = `${inputNumber}X${index} = ${multiplication}`
        selectElement.appendChild(optionElement)
    }

}

function getVal(){
    let selection = selectElement?.value
    let divElement: HTMLDivElement | null = document.querySelector('div#sel')

    if(!inputNumber) {
        return
    }

    if(!selection || !divElement) {
        alert('Fatal Error!')
        return
    }

    if(selection === 'init') {
        return
    }
    
    let result = Number(selection)
    let fixedNumber = result/inputNumber
    
    
    divElement.style.fontSize = '18'
    divElement.innerHTML =`${inputNumber} times ${fixedNumber} equals ${result}`
}
