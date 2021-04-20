var idx = 0
var type = 'End'

switch(type){
    case 'Beginning':
        while(idx < 500){
            console.log(`Hello there. This is the iteration number ${++idx}`)
        }
        break
    case 'End':
        do{
            console.log(`Hello there. This is the iteration number ${++idx}`)
        }while(idx < 500)
        break
    default:
        break
}

