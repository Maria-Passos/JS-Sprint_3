//variavel guardar algo


alert("Hello Word!!") //apresenta uma mensagem na tela do site;

// console.log("Hello Word!!") apresenta uma mensagem no console

//promt() -> recebe uma entrada digitada, para escrever algo e pegar algum tipo de informacao//
let nome = prompt("Ola, digite seu nome: ");

// let uma caixa para guardar uma informacao.

// prompt informacao estilo de texto
// parseInt tranforma o que esta entre () em numero inteiro. ex 1, 2, 34.
// parseFloat tranforma o que esta entre () em numero fracionado.

//Concatenacao -> juntar texto//
console.log("Seja bem vindo "+ nome + "!!!");

let pontos = 100;

let bonus = parseInt( prompt("Quantos pontos vocë deseja somar?"));

//adicao -> num1 + num2;//
//subtracao -> num1 - num2;//
//Multiplicacao -> num1 * num2;//
//Divisao -> num1 / num2;//

let totalPontos = pontos + bonus;

console.log(totalPontos);


let notaAluno = parseFloat(prompt("Digite a nota do aluno: "));
console.log(notaAluno);