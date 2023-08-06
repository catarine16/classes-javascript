class Pessoa{
   constructor( nome, idade) {
    this.idade = idade;
    this.nome = nome;
   } 
   Saudacao(){
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
   }
}
const P1 = new Pessoa ( "cecilia", 23 );
P1.Saudacao();

class trabalhador extends Pessoa{
   constructor (nome, idade, emprego, empresa){
      super(nome,idade);
      this.emprego = emprego
      this.empresa = empresa
   }
   curriculo(){
      console.log(`Oi meu nome é ${this.nome}, tenho ${this.idade} anos ,sou ${this.emprego} no(a) ${this.empresa}`)
   }
   
}
const w1 = new trabalhador ("Cecilia", "23", "professora","etec");
w1.curriculo();


