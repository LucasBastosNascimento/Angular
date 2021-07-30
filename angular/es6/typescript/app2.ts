class Carro {
    private modelo!: string 
    private numeroDePortas!: number
    private velociada: number =0

    constructor(modelo:string, numeroDePortas: number){
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas
    }
    public acelerar(): void{
        this.velociada= this.velociada + 10
    }

    public parar(): void{
        this.velociada =0
    }
    public velocidadeAtual(): number{
        return this.velociada
    }
}

class Concessionaria{
    private endereco!: string
    private listaDECarros!: any

    constructor(endereco: string){
        this.endereco = endereco;
    }
    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarro(): any{
        return this.listaDECarros
    }
}
let concessionaria = new Concessionaria('Av do estado');
console.log(concessionaria)
