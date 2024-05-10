// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

// let username = prompt("Digite um nome de usuário: ")

let numeros = parseInt(prompt("Digite um número: "));

if (numeros%2 ==0){ 
// com a % ele ta pegando o resto da divisao.
// como sabemos que um numero é par? que na divisao sempre sobra 0 quando dividimos 2 e todo numero que é impar sobra 1 na 
// divisao

// truncate é o que desconsidera a parte decimal e pega so a parte inteira

console.log("Este número é par")

}


else{
    console.log("Este número é impar")
}



