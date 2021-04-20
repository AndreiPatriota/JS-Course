function verify(){
    let birthYear = Number(document.querySelector('input#inyear').value)
    let currentYear = (new Date()).getFullYear()
    
    if(birthYear >= 1910 && birthYear <= currentYear){
        let age = currentYear - birthYear
        let isFemale = document.querySelector('input#female').checked
        let isMale = document.querySelector('input#male').checked 
        let gender = isFemale?'Female':isMale?'Male':null
        let res = document.querySelector('div#res')
        let pic = document.createElement('img')
        pic.setAttribute('id', 'image')

        switch(gender){
            case 'Female':
                res.style.textAlign = 'center'
                res.innerHTML = `We detected a ${age} year old Woman.`
                if(age < 2){
                    pic.setAttribute('src', 'babygirl.jpg')
                }else if(age < 6){
                    pic.setAttribute('src', 'girltoddler.jpg')
                }else if(age < 13){
                    pic.setAttribute('src', 'girlchild.jpg') 
                }else if(age < 20){
                    pic.setAttribute('src', 'girlteen.jpg')
                }else if(age < 41){
                    pic.setAttribute('src', 'youngwoman.jpg')
                }else if(age < 56){
                    pic.setAttribute('src', 'woman.jpg')
                }else if(age < 66){
                    pic.setAttribute('src', 'oldwoman.jpg')
                }else{
                    pic.setAttribute('src', 'elderlywoman.jpg')
                }
                res.appendChild(pic)
                break
            case 'Male':
                res.style.textAlign = 'center'
                res.innerHTML = `We detected a ${age} year old Man.`
                if(age < 2){
                    pic.setAttribute('src', 'babyboy.jpg')
                }else if(age < 6){
                    pic.setAttribute('src', 'boytoddler.jpg')
                }else if(age < 13){
                    pic.setAttribute('src', 'boychild.jpg') 
                }else if(age < 20){
                    pic.setAttribute('src', 'boyteen.jpg')
                }else if(age < 41){
                    pic.setAttribute('src', 'youngman.jpg')
                }else if(age < 56){
                    pic.setAttribute('src', 'man.jpg')
                }else if(age < 66){
                    pic.setAttribute('src', 'oldman.jpg')
                }else{
                    pic.setAttribute('src', 'elderlyman.jpg')
                }
                res.appendChild(pic)
                break
            default:
                alert('Select the gender')
                break
        }
    }else{
        alert('Invalid Birth year!!')
    } 

}