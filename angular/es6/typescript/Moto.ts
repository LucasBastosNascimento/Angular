import Veiculo from './Veiculo'

class Moto extends Veiculo{
    public acelerar(): void{
        this.velociada = this.velociada + 20
    }
}

export default Moto