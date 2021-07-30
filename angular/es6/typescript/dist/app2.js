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
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarro = function () {
        return this.listaDECarros;
    };
    return Concessionaria;
}());
var concessionaria = new Concessionaria('Av do estado');
console.log(concessionaria);
