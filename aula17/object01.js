let amigo = {
    nome: 'Jose',
    sexo: 'M',
    peso: 84.3,
    engordar(gordura=0){
        this.peso += gordura
        if(gordura != 0){
            console.log(`${this.nome} engordou ${gordura} Kilos`)
            console.log(`Ele agora pesa ${this.peso}`)
        }else{
            console.log(`${this.nome} nao engordou nada!`)
        }
    }
}

console.log(amigo)

amigo.engordar(2)
amigo.engordar(8)
amigo.engordar(1)
amigo.engordar(10)
amigo.engordar()
