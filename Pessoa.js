class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// ----- Exemplo de teste -----
// Criando uma instância da classe Pessoa com valores fictícios
const pessoaTeste = new Pessoa("martin", 17);

// Chamando o método apresentar()
pessoaTeste.apresentar();

// Resultado esperado no console:
// Olá, meu nome é martin e tenho 17 anos.
