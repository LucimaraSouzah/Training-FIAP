"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
const novoFuncionario = new Funcionario_1.default('Roberta', '192812981', '192.384.204-29');
const novoFuncionario2 = new Funcionario_1.default('Joao', '29319193', '912.319.391.30');
novoFuncionario.cadFuncionario();
novoFuncionario2.cadFuncionario();
// src/poo_func.ts
//     -importar a classe Funcionario
//     -instanciar a classe Funcionario
//     -chamar o método cadFuncionario
// */
