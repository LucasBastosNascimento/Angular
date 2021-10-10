import { DAOInterface } from "./DAOInterface";



export class Dao<T> implements DAOInterface<T>{

    nomeTabela: string = '';

    inserir(object: T): boolean{
        console.log('logica de insert')
        return true;
    }
    atualizar(object: T): boolean{
        console.log('lógica de insert')
        return true;
    }
    remover(id: number): T{
        console.log('lógica delete')
        return  Object();
    }
    selecionar(id: number): T{
        console.log('lógica select')
        return Object();
    }
    selecionarTodos(): [T] {
        console.log('lógica getAll')
        return [Object()]

    }

}