import readlinesync = require("readline-sync");

/** Exercício 03:
 * Escreva um programa para criar uma Collection Set do tipo number. 
 * O programa deverá solicitar ao usuário, que ele digite via teclado 
 * 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. 
 * Em seguida, faça o que se pede: na tela todos os elementos da Collection Set.
 */

let numeros: Set<number> = new Set<number>();

console.log('=== A seguir, informe 10 números inteiros (números repetidos serão ignorados) === ');

for (let i = 0; i < 10; i++) {
    const num = readlinesync.questionInt(`Digite o ${i + 1}° número: `);
    numeros.add(num);
}

console.log('\nOs números armazenados no Set e na ordem crescente são: ');
console.log(Array.from(numeros).sort((a, b) => a - b));