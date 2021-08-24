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
}

class Pessoa {
    private nome!: string
    private carroPreferido!: string
    private carro!: Carro

    constructor(nome:string, carroPreferido:string){
        this.nome = nome
        this.carroPreferido = carroPreferido 
    }

    public dizerNome(): string{
        return this.nome
    }
    
    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }
    public dizerCarroQueTem(): Carro{
        return this.carro
    } 
}

/*--- criar carros ---*/
let carroA = new Carro('dodge journey',4)
let carroB = new Carro('veloster',3)
let carroC = new Carro('cerato',4)

/*--- montar a lista de carros da concessionaria --*/
let listaDeCarros: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Av Paulista',listaDeCarros)

/*--- Exibir a lista de carros --*/
//console.log(concessionaria.mostrarListaDeCarro())

/*---- comprar o carro --*/
let cliente = new Pessoa('João', 'veloster')

concessionaria.mostrarListaDeCarro().map((carro: Carro) =>{
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //comprar o carro
        cliente.comprarCarro(carro)
    }
})
console.log(cliente.dizerCarroQueTem())