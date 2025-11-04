import readlinesync = require("readline-sync");

/** Exercício 02:
 * Escreva um programa para criar uma Collection Array do tipo number, 
 * inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, 
 * que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, 
 * exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, 
 * o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
 */

let numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const numDigitado: number = readlinesync.questionInt('Digite um número inteiro: ');

let numEncontrado: boolean = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numDigitado) {
        console.log(`O numero ${numDigitado} está localizado na posição: ${i}`);
        numEncontrado = true;
        break;
    }
}

if (!numEncontrado) {
    console.log(`O número ${numDigitado} não foi encontrado!`);
}