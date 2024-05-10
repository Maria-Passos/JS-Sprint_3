
// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.



let username = prompt("Digite um nome de usuário: ");

let numero = parseInt(prompt("Digite um número de 1 a 7: "));

if(numero == 1){
    console.log("Segunda-Feira");}
else if(numero == 2){
    console.log("Terça-Feira")}

 else if(numero == 3){
   console.log("Quarta-Feira")}

 else if(numero == 4){
   console.log("Quinta-Feira")}

 else if(numero == 5){
   console.log("Sexta-Feira")}

 else if(numero == 6){
   console.log("Sábado")}

 else if(numero == 7){
   console.log("Domingo")}

 else console.log ("errou miseravel")

        // //correcao professor//
        // let dia_semada = prompt("Digite um número de 1 a 7: ");
      // ele é bom para prever resoltados e opcoes e possibilidades bem definidas/especificas.//
      // como temos valores difinidos e cada opcao para cada valor é bom usar switch case //

        // switch(dia_semana){
        //   case "1":
        //     // caso seja 1 é://
        //     console.log("Segunda-feira");
        //     break;

        //     case "2":
        //       console.log(Terca-Feira);
        //     break
        // }
        //   // Caso náo seja previsto vai pro default//
        // default [e que tudo que náo tem do switch vai pro default]


    
