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
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarro = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/*--- criar carros ---*/
var carroA = new Carro('dodge journey', 4);
var carroB = new Carro('veloster', 3);
var carroC = new Carro('cerato', 4);
/*--- montar a lista de carros da concessionaria --*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
/*--- Exibir a lista de carros --*/
//console.log(concessionaria.mostrarListaDeCarro())
/*---- comprar o carro --*/
var cliente = new Pessoa('João', 'veloster');
concessionaria.mostrarListaDeCarro().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
