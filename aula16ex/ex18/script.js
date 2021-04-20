const lstOfVals = [] //Array that will store the entered values
const divRes = document.querySelector('div#res') //Html div element that holds the output display

function addNum2Array(){/*addNum2Array() starts here*/
    let txtBox = document.querySelector('input#inNum') //Html input element
    let rawVal = txtBox.value //Raw input value

    if(rawVal.length == 0){//if no number has been entered, show this and beat it
        alert('Field is empty. Please, insert a valid number')
    }else{//else, do the thing
        let numVal = Number(rawVal)//converts raw input to numerical value

        if(numVal >= 1 && numVal <= 100){//checks if the entered value is between 1 and 100
            if(lstOfVals.indexOf(numVal) == -1){//checks if the number has already been added to the list
                lstOfVals.push(numVal)//Inserts number in the list

                /*Creates an Html option element, and appends it to the
                Html select element*/
                let optionItem = document.createElement('option')
                optionItem.value = numVal
                optionItem.innerHTML = `Number ${numVal} has been added.`
                document.querySelector('select#selRes').appendChild(optionItem)

                divRes.innerHTML = ''//Clears the output display area
            }else{//In case the number has already been added, show this and leave
                alert('Number has already been added to the list')
            }
        }else{//In case the number is outside the range, show this and get lost
            alert('Input is out of range. Please, inserta a number between 1 and 100!')
        }
        /*Regardless of the number being valid or not,
        always clear the input element entry*/
        txtBox.value = ''
        txtBox.focus()
    }
    /*addNum2Array() ends here*/
}

function printRes(){/*printRes() starts here*/
    if(lstOfVals.length != 0){//Check if the list is empty
        let lstSize = lstOfVals.length //Gets the current size of the list
        
        /*Initializes the maximum and minimum values,
        and the summation accumulator*/
        let max = lstOfVals[0]
        let min = lstOfVals[0]
        let sum = 0

        /*loops through the list to find 
        the smallest and biggest numbers, and 
        to obtain the elements summation*/
        for(let pos in lstOfVals){
            max = lstOfVals[pos] > max ? lstOfVals[pos] : max
            min = lstOfVals[pos] < min ? lstOfVals[pos] : min
            sum += lstOfVals[pos]
        }

        let average = sum / lstSize//Calculates the average of the list's elements
        
        /*Presets the list's specs in the output
        display area*/
        divRes.innerHTML = `<p>The list has ${lstSize} numbers.</p>`
        divRes.innerHTML += `<p>The biggest number so far is ${max}.</p>`
        divRes.innerHTML += `<p>The lowest number so far is ${min} values.</p>`
        divRes.innerHTML += `<p>The summation of the lists elements equals ${sum}.</p>`
        divRes.innerHTML += `<p>The average of the lists elements equals ${average}</p>`
    }else{//In case list is empty, show this, and leave
        alert('There are no stored values in the list.')
    }
    /*printRes() ends here*/ 
}