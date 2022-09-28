/**
Ser autenticável significa ter o método autenticar

Duck Type
 */

export class SistemaAutencicacao{
    static login(autenticavel, senha){
        if(SistemaAutencicacao.eAutenticavel(autenticavel)){
           return autenticavel.autenticar(senha);
        }    
        return false;
    }

    static eAutenticavel(autenticavel){
        return "autenticar" in autenticavel && // operador in verifica se a chave äutenticar"existe dentro do objeto autenticavel
        autenticavel.autenticar instanceof Function //operador && verifica se o autenticavel.autenticar é do tipo de uma função
    }
}