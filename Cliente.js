export class Cliente { //criação de uma classe onde serão englobados todos atributos (variáveis) que serão utilizados no código
    
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){ //atributo especial 
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    } 

   autenticar(){
       return true;
   }

}