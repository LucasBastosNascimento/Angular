export class Coracao{
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = 'assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png'
    ){}

    public exibeCoracao(): String{
        if(this.cheio){
            return this.urlCoracaoCheio
        } else {
            return this.urlCoracaoVazio
        }

    }
}