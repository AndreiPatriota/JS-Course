let myLst = [4,2,3,1]
myLst.push(17)

let valToSeek = 1
let pos = myLst.indexOf(valToSeek)
if(pos == -1){
    console.log(`${valToSeek} is not in the list`)
} else{
    console.log(`${valToSeek} is at position ${pos}`)
}

/*
console.log(`The first element of the array is ${num[0]}`)
console.log(`Our array is: ${num}. The size of the array is ${num.length}`)
num.sort()
console.log(`The sorted version of the array is ${num}`)

console.log(num)
let pos = num.indexOf[78]
console.log(pos)
console.log(`The value 17 is at position ${pos}`)

console.log('\nClassical way of running through an array')
for(let idx = 0; idx < num.length; idx++){
    console.log(`The element ${idx} is: ${num[idx]}`)
}

console.log('\nUsing For-Each')
num.forEach((item, idx)=>{
    console.log(`The element ${idx} is: ${item}`)
})

console.log('\nNewest way of running through an array')
for(let pos in num){
    console.log(`The element ${pos} is: ${num[pos]}`)
}
*/
