
// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.


// Escreva um programa que solicita o ano de nascimento de uma pessoa

let anoNascimento = parseFloat(prompt( "Em que ano você nasceu?"));

// anoAtual = 2024;
let anoAtual = new Date().getFullYear();
// new Date . é para manter atualizada data
 ;
// verifica se ela é maior de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

idade = anoAtual - anoNascimento;

if (idade >= 18) {

    console.log("Você é MAIOR DE IDADE! Finalmente pode ser preso!");
    console.log("Sua idade atual é " + idade + " anos");
}

else (console.log("Você É menor de idade, volte a tomar TODDYNHO!"));