const DIVMSG = document.querySelector('div#msg')
const IMG = document.querySelector('img#image')

function load(){
    let date = new Date()
    let hour = date.getHours()

    DIVMSG.innerHTML = `<p>It is ${hour}:${date.getMinutes()}<p>`
    if(hour < 12){
        DIVMSG.innerHTML += 'Good morning'
        IMG.src = 'morning.png'
        document.body.style.background = '#e2cd9f'
    }else if(hour < 18){
        DIVMSG.innerHTML += 'Good afternoon' 
        IMG.src = 'afternoon.png'
        document.body.style.background = '#b9846f'
    }else{
        DIVMSG.innerHTML += 'Good evening'
        IMG.src = 'evening.png'
        document.body.style.background = '#515154'
    }

    
}