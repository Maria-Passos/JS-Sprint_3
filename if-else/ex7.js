// <!-- Exercício 7: Cálculo de desconto progressivo

// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado. -->


alert = ("Sempre um prazer te atender!");

let valorTotalRoupas = parseFloat(prompt("Qual o valor total da sua compra?"));

let desconto;

// console.log ( "tu gastou "+ valorTotalRoupas + "!");

if ( valorTotalRoupas <= 100) {
    desconto = 0;
console.log("Perdeu Playboy, está sem desconto") ;
}


else if ( valorTotalRoupas > 100,01 && valorTotalRoupas <= 200 ){
    desconto = 0,1;
console.log ("Arrasou! Tu Ganhou " + (desconto*100) + "% de desconto!!")

}

else if ( valorTotalRoupas >=200 ){
     desconto = 0.2; //(0.2=20%)//
console.log ("Ta podendo, hein ! Tu Ganhou "+ (desconto*100) + "% de desconto!!!") 
}

let valorFinal = valorTotalRoupas - (valorTotalRoupas * desconto);

console.log("O valo final da compra com o desconto: R$:" + valorFinal.toFixed(2))


