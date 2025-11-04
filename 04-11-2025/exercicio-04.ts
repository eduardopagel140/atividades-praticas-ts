import readlinesync = require("readline-sync");

/** Exercício 04:
 * Escreva um programa para criar uma Collection Set do tipo number, 
 * inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, 
 * que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Collection Set, 
 * exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, 
 * o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
 */

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

const numDigitado: number = readlinesync.questionInt('Digite um número inteiro: ');

if (numeros.has(numDigitado)) {
    console.log(`O número ${numDigitado} foi encontrado!`);
} else {
    console.log(`O número ${numDigitado} não foi encontrado!`);
}