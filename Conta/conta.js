export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata"); // lançando um erro para o usuário
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){ //usando o acessor set para atribuibir valores ao atributo privado _cliente
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){ //usando o acessor get para pegar as informações do atributo _cliente
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valorSacado; //retorna o valor para o usuário referente a declaração feita no if 
    }

    return 0;   
}

    depositar(valor) {
        this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}