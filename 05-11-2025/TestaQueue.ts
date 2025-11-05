import { Queue } from "./Queue";
import * as readline from "readline-sync";

/** Exercício 01:
*   Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, 
*   para organizar uma fila por ordem de chegada dos Clientes de um Banco. 
*   O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
    1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
    2: Listar todos os Clientes na fila
    3: Chamar (retirar) uma pessoa da fila 
    0: O programa deve ser finalizado. 
    Caso a fila esteja vazia, o programa deverá informar que a fila está vazia 
    ao tentar retirar (chamar) um cliente da fila.
*/

const filaClientes = new Queue<string>();
let opcao: number;

do {
    console.log("\n==================================");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("==================================");

    opcao = Number(readline.question("Digite uma opção: "));

    switch (opcao) {
        case 1:
            const nome = readline.question("\nDigite o nome: ");
            filaClientes.enqueue(nome);
            console.log("\nFila: ");
            filaClientes.list().forEach(cliente => console.log(cliente));
            console.log("\nCliente Adicionado!");
            break;

        case 2:
            if (filaClientes.isEmpty()) {
                console.log("\nA Fila está vazia!");
            } else {
                console.log("\nLista de Clientes na Fila:\n");
                filaClientes.list().forEach(cliente => console.log(cliente));
            }
            break;

        case 3:
            if (filaClientes.isEmpty()) {
                console.log("\nA Fila está vazia!");
            } else {
                filaClientes.dequeue();
                console.log("\nFila:\n");
                filaClientes.list().forEach(cliente => console.log(cliente));
                console.log("\nO Cliente foi Chamado!");
            }
            break;

        case 0:
            console.log("\nPrograma Finalizado!");
            break;

        default:
            console.log("\nOpção inválida! Tente novamente.");
            break;
    }

} while (opcao !== 0);