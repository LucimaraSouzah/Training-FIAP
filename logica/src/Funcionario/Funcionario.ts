import Pessoa from "../Pessoa";

class Funcionario extends Pessoa {
  ri: string;
  cpf: string;
  isAdmin: boolean = true;
  static ipAddress: string = "127.0.0.1";
  private _salario: number = 0;

  constructor(
    parametroNome: string,
    parametroIdade: number,
    parametroRi: string,
    parametroCpf: string,
    parametroSalario: number
  ) {
    super(parametroNome, parametroIdade);
    this.ri = parametroRi;
    this.cpf = parametroCpf;
    this.salario = parametroSalario;
  }
  cadFuncionario(): void {
    console.log(
      `Funcionário ${this.nome} cadastrado com sucesso irá ganhar ${this.salario}!`
    );
  }

  get salario(): number {
    return this.isAdmin ? this._salario : 0;
  }

  set salario(valor: number) {
    if (valor < 1200) {
      this._salario = 1200;
    } else {
      this._salario = valor;
    }
  }
}

export default Funcionario;

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
