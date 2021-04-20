function factorial(n=0){
    let fat = 1

    if(n == 0){
        return 1
    }

    for(let count = n; count >= 1; count--){
        fat *= count
    }

    return fat
}

let result = factorial(3)
console.log(`The result is ${result}`)