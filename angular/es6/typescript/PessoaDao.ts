import { DAOInterface} from './DAOInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DAOInterface{

    nomeTabela: string = 'tb_pessoa';

    inserir(object: Pessoa): boolean{
        console.log('logica de insert')
        return true;
    }
    atualizar(object: Pessoa): boolean{
        console.log('lógica de insert')
        return true;
    }
    remover(id: number): Pessoa{
        console.log('lógica delete')
        return new Pessoa('','');
    }
    selecionar(id: number): Pessoa{
        console.log('lógica select')
        return new Pessoa('','');;
    }
    selecionarTodos(): [Pessoa] {
        console.log('lógica getAll')
        return [new Pessoa('','')]

    }
}