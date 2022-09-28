import { Conta } from "./conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0; //declaração de atributos estáticos
    //_cliente; //atributo privado
    //agencia; //atritubo público
    //_saldo = 0; //a utilização do underline _ indica que o atributo é privado e está iniciado em 0


    

    constructor(cliente, agencia){
        super(0, cliente, agencia); //para chamar o construtor da classe pai, usamos a palavra super
        ContaCorrente.numeroDeContas += 1; //para chamar o atributo estático, utilizamos o atributo da classe
    }
    // sobreescrevendo o comprtamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa)
        }
    }
