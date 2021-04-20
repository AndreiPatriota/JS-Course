let age = 22

console.log(`You are ${age} years old.`)
if(age < 16){
    console.log('Cannot vote')
}else if(age < 18 || age > 65){
    console.log('Vote is not mandatory')
}else{
    console.log('Vote is mandatory')
}

