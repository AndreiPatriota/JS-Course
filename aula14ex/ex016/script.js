function doTheCount(){
    var inBegin = document.querySelector('input#inbegin').value
    var inEnd = document.querySelector('input#inend').value
    var inStep = document.querySelector('input#instep').value
    var divRes = document.querySelector('div#res')

    if(inBegin.length === 0){
        alert('Please, insert a beginning number')
        divRes.innerHTML = 'Impossible to count'
    }else if(inEnd.length === 0){
        alert('Please, insert an ending number')
        divRes.innerHTML = 'Impossible to count'
    }else if(inStep.length === 0){
        alert('Please, insert a step')
        divRes.innerHTML = 'Impossible to count'
    }else{
        let numBegin = Math.abs(Number(inBegin))
        let numEnd = Math.abs(Number(inEnd))
        let numStep = Math.abs(Number(inStep))
        numStep = numStep != 0 ? numStep : 1
        divRes.innerHTML = 'Counting: <br>'

        if(numBegin <= numEnd){
            for(let idx = numBegin; idx <= numEnd; idx += numStep){
                divRes.innerHTML += `${idx} &#128073; `
            } 
        }else{
            for(let idx = numBegin; idx >= numEnd; idx -= numStep){
                divRes.innerHTML += `${idx} &#128073; `
            }
        }
        divRes.innerHTML += `&#127987;`   
    }
}