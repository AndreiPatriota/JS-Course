let inNum = 0
let selArea = document.querySelector('select#results')

function generate(){
    var inVal = document.querySelector('input#innum').value
    
    if(inVal.length == 0){
        alert('Please insert a number in the box')
    }else{
        inNum = Number(inVal)
        selArea.innerHTML = ''
        
        for(let count = 1; count <= 10; count++){
            let mult = inNum*count
            let item = document.createElement('option')
            item.value = mult
            item.innerText = `${inNum} X ${count} = ${mult}`
            selArea.appendChild(item)
        }
    }
}

function getVal(){
    var selection = selArea.value
    
    if(selection != 'init'){
        let resultNum = Number(selection)
        let fixedNum = resultNum/inNum
        let divRes = document.querySelector('div#sel')
        
        divRes.style.fontSize = 18
        divRes.innerHTML = `${inNum} times ${fixedNum} equals ${resultNum}`
    }
    //var chosenVal = document.querySelector('option#')
}