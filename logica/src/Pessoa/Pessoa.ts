class Pessoa {
  nome: string;
  idade: number;
  constructor(parametroNome: string, parametroIdade: number) {
    this.nome = parametroNome;
    this.idade = parametroIdade;
    console.log(`A pessoa ${this.nome} de idade ${this.idade} está andando.`);
  }
}

export default Pessoa;
