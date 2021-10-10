"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velociada = 0;
    }
    Veiculo.prototype.acelerar = function () {
        this.velociada = this.velociada + 10;
    };
    Veiculo.prototype.parar = function () {
        this.velociada = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velociada;
    };
    return Veiculo;
}());
exports.default = Veiculo;
