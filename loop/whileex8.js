// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.


let idade = parseInt(prompt("Olá, digite seu idade: "));

// let idade = 18;

while (idade < 18){

idade = parseInt(prompt("Ola, digite seu idade: "));
    console.log( "Sua idade é: "+ idade);
}

console.log( "Já pode dar PT, sua idade é: " + idade);