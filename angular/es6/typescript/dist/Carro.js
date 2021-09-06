"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velociada = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velociada = this.velociada + 10;
    };
    Carro.prototype.parar = function () {
        this.velociada = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velociada;
    };
    return Carro;
}());
exports.default = Carro;
