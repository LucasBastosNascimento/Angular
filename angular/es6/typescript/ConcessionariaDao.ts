import { DAOInterface} from './DAOInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DAOInterface{

    nomeTabela: string = 'tb_concessionaria';

    inserir(object: Concessionaria): boolean{
        console.log('logica de insert')
        return true;
    }
    atualizar(object: Concessionaria): boolean{
        console.log('lógica de insert')
        return true;
    }
    remover(id: number): Concessionaria{
        console.log('lógica delete')
        return new Concessionaria('',[]);
    }
    selecionar(id: number): Concessionaria{
        console.log('lógica select')
        return new Concessionaria('',[]);;
    }
    selecionarTodos(): [Concessionaria] {
        console.log('lógica getAll')
        return [new Concessionaria('',[])]

    }
}