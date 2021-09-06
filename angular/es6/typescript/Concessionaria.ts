import Carro from './Carro'
import { ConcessionariaInterface } from './ConcessionariaInterfaces'

export default class Concessionaria implements ConcessionariaInterface{
    private endereco!: string
    private listaDeCarros!: Array<Carro>

    constructor(endereco: string, listaDeCarros:Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros; 
    }
    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarro(): Array<Carro> {
        return this.listaDeCarros
    }

    public fornecerHorarioDeFuncionamento(): string{
        return 'De segunda a sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00'
    }
     
}
