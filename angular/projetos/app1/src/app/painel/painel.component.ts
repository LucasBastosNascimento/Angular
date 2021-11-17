import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[]= FRASES
  public instrucao: string='Traduza a frase:'
  public resposta: string=''

  public rodada: number=0

  public rodadaFrase!: Frase;

  constructor() {
    this.rodadaFrase =this.frases[this.rodada]
    console.log(this.frases) 
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta=(<HTMLInputElement>resposta.target).value;
  }
  public verificarResposta(): void{

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('A tradução esta correta')

      //trocar pergunta da  rodada
      this.rodada++

      //atualiza o objeto rodadaFrase
      this.rodadaFrase = this.frases[this.rodada]
    }else{
      alert('A tradução está errada')
    }
  }
}
