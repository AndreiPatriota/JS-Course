const beginInputElement: HTMLInputElement | null = document.querySelector('input#inbegin')
const endInputElement: HTMLInputElement | null = document.querySelector('input#inend')
const stepInputElement: HTMLInputElement | null = document.querySelector('input#instep')
const divElement: HTMLInputElement | null = document.querySelector('div#res')

function doTheCount() {
    let start = beginInputElement?.value
    let end = endInputElement?.value
    let step = stepInputElement?.value

    if (!start || !end || !step || !divElement) {
        alert('Fatal error')
        return
    }

    if (start.length === 0) {
        alert('Please, insert a beginning number')
        divElement.innerHTML = 'Impossible to count'
        return
    }

    if (end.length === 0) {
        alert('Please, insert an ending number')
        divElement.innerHTML = 'Impossible to count'
        return
    }

    if (step.length === 0) {
        alert('Please, insert a step')
        divElement.innerHTML = 'Impossible to count'
        return
    }

    let startNumber = Math.abs(Number(start))
    let endNumber = Math.abs(Number(end))
    let stepNumber = Math.abs(Number(step))
    let factor = 1
    stepNumber = stepNumber != 0 ? stepNumber : 1
    divElement.innerHTML = 'Counting: <br>'

    if (startNumber > endNumber) {
        startNumber *= -1
        endNumber *= -1
        factor = -1
    }

    for (let index = startNumber; index <= endNumber; index += stepNumber) {
        divElement.innerHTML += `${factor*index} &#128073; `
    }

    divElement.innerHTML += `&#127987;`
}

