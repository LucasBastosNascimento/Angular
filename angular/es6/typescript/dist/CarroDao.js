"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDao = void 0;
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('lógica de insert');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('lógica delete');
        return new Carro_1.default('', 0);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new Carro_1.default('', 0);
        ;
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [new Carro_1.default('', 0)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
