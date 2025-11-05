import { Stack } from "./Stack";
import * as readline from "readline-sync";

/** Exercício 02:
*   Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, 
*   para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu 
*   que aceitará as opções 0, 1, 2 e 3:
    1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
    2: Listar todos os livros da Pilha
    3: Retirar um livro da pilha 
    0: O programa deve ser finalizado. 
    Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, 
    o programa deverá informar que a pilha está vazia.
*/

const pilhaLivros = new Stack<string>();
let opcao: number;

do {
    console.log("\n==================================");
    console.log("1 - Adicionar Livro na Pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da Pilha");
    console.log("0 - Sair");
    console.log("==================================");

    opcao = Number(readline.question("Entre com a opção desejada: "));

    switch (opcao) {
        case 1:
            const nomeLivro = readline.question("\nDigite o nome: ");
            pilhaLivros.push(nomeLivro);
            console.log("\nPilha:\n");
            pilhaLivros.list().forEach(livro => console.log(livro));
            console.log("\nLivro adicionado!");
            break;

        case 2:
            if (pilhaLivros.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                console.log("\nLista de Livros na Pilha:\n");
                pilhaLivros.list().forEach(livro => console.log(livro));
            }
            break;

        case 3:
            if (pilhaLivros.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                pilhaLivros.pop();
                console.log("\nPilha:\n");
                pilhaLivros.list().forEach(livro => console.log(livro));
                console.log("\nUm Livro foi retirado da pilha!");
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