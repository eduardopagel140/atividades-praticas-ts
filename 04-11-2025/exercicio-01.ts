import readlinesync = require("readline-sync");

/* Exercício 01:
    Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
    O programa deverá solicitar ao usuário, que ele digite via teclado 
    5 cores e deverá adicioná-las individualmente no Array. 
    Em seguida, faça o que se pede:
    - Mostre na tela todas as cores adicionadas. 
    - Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

*/

let nome: string;
let cores: string[] = [];

nome = readlinesync.question(`Informe seu nome: `);

console.log(`\nOlá, ${nome}! A seguir, digite 5 cores diferentes!`);

for (let i = 0; i < 5; i++) {
    const cor = readlinesync.question(`Digite a cor ${i + 1}: `);
    cores.push(cor);
}

console.log(`\nAs cores adicionadas são: ${cores} `);

let coresOrdemCrescente = [cores].sort();
console.log(`\nAs cores em ordem crescente ficam assim: ${coresOrdemCrescente}`);