import { Cliente } from "./Cliente.js"; //importando classes externas
import { Gerente } from "./Funcionarios/gerente.js";
import { Diretor } from "./Funcionarios/diretor.js";
import { SistemaAutencicacao } from "./sistemaAutenticacao.js"; 

const diretor = new Diretor("Rodrigo, 10000, 9182736450");
diretor.cadastrarSenha("123456");
const gerente = new Gerente("João, 5000, 1902387564");
gerente.cadastrarSenha("123");

const cliente = new Cliente("Ana", 5647382910, "098");
const gerenteEstalogado = SistemaAutencicacao.login(gerente, "123");
const diretorEstalogado = SistemaAutencicacao.login(diretor, "123456");


const clienteEstalogado = SistemaAutencicacao.login(cliente, "098");

console.log(diretorEstalogado, gerenteEstalogado, cliente);

//import { ContaCorrente }  from "./Conta/contaCorrente.js"; //importando classes externas
//import { ContaPoupanca } from "./Conta/contaPoupanca.js"; //importando classes externas
//import { contaSalario } from "./Conta/contaSalario.js";

//const cliente1 = new Cliente("Murilo", 1234567890);//criando uma nova classe //simplificando as declarações abaixo
//para declararmos valores as variáveis do novo cliente, usamos a seguinte declaração
//cliente1.nome = "Murilo";
//cliente1.cpf = 1234567890;

//const cliente2 = new Cliente("Ligia", 9876543210);//criando uma nova classe  //simplificando as declarações de nome e cpf feitas abaixo
//cliente2.nome = "Ligia";
//cliente2.cpf = 9876543210;

//const contaCorrenteMurilo = new ContaCorrente(cliente1, 1001); //criando uma nova variável para inserir as informações referentes a classe ContaCorrente
//contaCorrenteMurilo.agencia = 1001;
//contaCorrenteMurilo.cliente = cliente1;
//contaCorrenteMurilo.depositar(500);
//contaCorrenteMurilo.sacar(100);

//contaCorrenteMurilo.depositar(100);
//contaCorrenteMurilo.depositar (200);
//contaCorrenteMurilo.depositar (-1);

//const valorSacado = contaCorrenteMurilo.sacar(50);
//console.log(valorSacado);

//const conta2 = new ContaCorrente(cliente2, 1002);
//conta2.cliente = cliente2;
//conta2.agencia = 1002;

//let valor = 200;
//contaCorrenteMurilo.transferir(valor, conta2);

//const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
//const ContaSalario = new contaSalario(cliente1);
//ContaSalario.depositar(200);
//ContaSalario.sacar(10);


//console.log(ContaCorrente);


//console.log("valor", valor);
//console.log(conta2);
//console.log(contaCorrenteMurilo);

//console.log(cliente1, cliente2); usando a vírgula, podemos imprimir as informações referentes aos clientes na mesma linha
//console.log(cliente1);
//console.log(cliente2);
