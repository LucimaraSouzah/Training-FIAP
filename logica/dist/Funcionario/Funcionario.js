"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("../Pessoa"));
class Funcionario extends Pessoa_1.default {
    ri;
    cpf;
    isAdmin = true;
    static ipAddress = "127.0.0.1";
    _salario = 0;
    constructor(parametroNome, parametroIdade, parametroRi, parametroCpf, parametroSalario) {
        super(parametroNome, parametroIdade);
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        this.salario = parametroSalario;
    }
    cadFuncionario() {
        console.log(`Funcionário ${this.nome} cadastrado com sucesso irá ganhar ${this.salario}!`);
    }
    get salario() {
        return this.isAdmin ? this._salario : 0;
    }
    set salario(valor) {
        if (valor < 1200) {
            this._salario = 1200;
        }
        else {
            this._salario = valor;
        }
    }
}
exports.default = Funcionario;
const avanade = new Funcionario("Joao", 30, "876868", "123.456.789-00", 1000);
console.log("Acessando propriedade estática " + Funcionario.ipAddress);
avanade.cadFuncionario();
// /src/Funcionario
//    nome:string, ri:string, cpf:string
//     -constructor
//         inicializar os atributos
//     -cadFuncionario
//         -console.log('Funcionário fulano cadastrado com sucesso!');
// src/poo_func.ts
//     -importar a classe Funcionario
//     -instanciar a classe Funcionario
//     -chamar o método cadFuncionario
// */
