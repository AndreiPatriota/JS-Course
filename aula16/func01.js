function evenOdd(num){
    return num%2==0 ?'is even':'is odd'
}

let inputNum = '25' 
let result = evenOdd(inputNum)
console.log(`${inputNum} ${result}.`)