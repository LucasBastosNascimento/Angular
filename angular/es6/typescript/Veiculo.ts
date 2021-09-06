export default class Veiculo {
    protected modelo!: string 
    protected velociada: number =0

    public acelerar(): void{
        this.velociada = this.velociada + 10
    }
    public parar(): void{
        this.velociada =0
    }
    public velocidadeAtual(): number{
        return this.velociada
    }
}
