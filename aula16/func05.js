function factorial(n=0){
    if(n == 0){
        return 1
    }

    if(n == 1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

let result = factorial(5)
console.log(`The result is ${result}`)