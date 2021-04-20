let now = new Date()
let time = now.getHours()

console.log('What time is it?')
console.log(`It is ${time} o\'Clock`)

if(time < 12){
    console.log('Good morning')
}else if(time < 18){
    console.log('Good afternoon')
}else if(time <= 23){
    console.log('Good evenning')
}else{
    console.log('Ivalide time')
}