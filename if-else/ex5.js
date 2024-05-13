// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.


// Escreva um programa que solicita três números ao usuário

let numero1 = parseFloat(prompt( "Digite o primeiro número:"));

let numero2 = parseFloat(prompt( "Digite o segundo número:"));

let numero3 = parseFloat(prompt( "Digite o terceiro número:"));


// verifica se eles estão em ordem crescente.

if   (numero1 < numero2 && numero2 < numero3 ) {
console.log("Estes números estão em ordem crescente!! " ) }

// Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

else {
    console.log("Estes números NÃO estão em ordem crescente!! " )
}

//desafio se o numero esta decrescene, crescente ou fora de ordem.