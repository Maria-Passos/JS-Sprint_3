// Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.


let tabuada = parseInt(prompt("Digite um número para ver a tabuada: "));



if (!isNaN(tabuada)){
for (let cont = 1; cont <=10; cont++){
    console.log(tabuada  + "X" + cont + "=" + (tabuada*cont));
}
} else{
    console.log("Número invalido. Por favor, digite um número válido.")
}

// função para verificar se é um numero ou não
console.log(isNaN("Hello Word")); // retorna true pois é verdadeiro que é texto
console.log(isNaN("123")); // retorna false pois é falso que é texto

// ou

// for (let num=0; num < 50; num+=3){
//     console.log("Segue tabuada do 3 até o número 10: " + num);
// }
