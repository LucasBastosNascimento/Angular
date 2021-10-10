import {Dao} from './Dao'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
import Carro from './Carro'
import Moto from './Moto'

let concessionaria = new Concessionaria('',[]);
let dao: Dao<Concessionaria> = new Dao<Concessionaria>();
dao.inserir(concessionaria);

let pessoa: Pessoa = new Pessoa('','');
let dao2: Dao<Pessoa> = new Dao<Pessoa>();
dao2.atualizar(pessoa);

let carro: Carro = new Carro('',0);
let dao3: Dao<Carro> = new Dao<Carro>();
dao3.atualizar(carro);

let moto: Moto = new Moto();
let dao4: Dao<Moto> = new Dao<Moto>();
dao4.atualizar(moto);