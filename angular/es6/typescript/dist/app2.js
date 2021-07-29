"use strict";
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
var carroA = new Carro("Tiguan", 4);
console.log(carroA);
carroA.acelerar();
console.log(carroA);
carroA.acelerar();
carroA.acelerar();
console.log(carroA);
carroA.parar();
console.log(carroA);
