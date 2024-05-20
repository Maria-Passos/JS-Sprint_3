// Construir um menu que é possível escolher um exercicio entre os exercicios anteriores, para ser execultado. Faça com que
// o menu repita a sua execução, disponibilize as opçoes para o usuário, até o usuário digitar "sair" de 6 exercicios

// function exercicioLogin() {

// let username = prompt("Digite um nome de usuário: ")

// let senha = prompt("Digite a senha: ");

// if(username == "admin" && senha =="senha123"){
//     console.log("Login bem sucedido");

// } else {
//     console.log("Você não tem permissão de acesso!")

// }}
// let opcao= window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exemplo login")

// switch (opcao) {
//     case "1":
//         exercicioLogin()
//         break;

//     default:
//         break;
// }



// ------------------------




    function maioridadeIfElse() {
        let anoNascimento = parseFloat(prompt( "Em que ano você nasceu?"));
    
        let anoAtual = new Date().getFullYear();
    
        idade = anoAtual - anoNascimento;
        
        if (idade >= 18) {
        
            console.log("Você é MAIOR DE IDADE! Finalmente pode ser preso!");
            console.log("Sua idade atual é " + idade + " anos");
        }
        
        else (console.log("Você É menor de idade, volte a tomar TODDYNHO!"));
    }  
   
    function fibonacci(){
        let fib1= 1;
        let fib2= 1;
        
        console.log("Os primeiros 10 números da sequencia de Fibonacci são: ");
        console.log(fib1);
        console.log(fib2);
        
        
        for(let i = 2; i < 10; i++){
            let nextFib = fib1 + fib2;
            console.log(nextFib);
        
        
        fib1 = fib2;
        fib2 = nextFib;
        }
          }

    function soma1a100(){
        let num= 1;
        let soma= 0;
        
        while( num <= 100){
           // soma = soma + num; ou
           soma +=num;
           console.log(soma);
            num++
        }
        
        console.log("A soma dos números de 1 à 100 é: " + soma)
          }

    function contagemregressiva(){
        let num = parseInt(prompt("Olá, digite um número para a contagem regressiva: "));

        console.log("A contagem regressiva está comecando em: " + num)
        
        
        while(num >=0){
            console.log(num);
            num--
        } }

    function numpar1a20(){
        let numpar = 0;

        console.log("Números pares de 0 à 20: ")
        
        while (numpar <= 20){
           
            numpar += 2;
        
        console.log("O número par é " + numpar)
          }}

    function num1a10(){
    for(let num = 1; num <= 10; num++){
        console.log(num);
     }  }

    function descontocompra(){
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
        
        console.log("O valo final da compra com o desconto: R$:" + valorFinal.toFixed(2))  }

    function parOuImpar(){
        let numeros = parseInt(prompt("Digite um número: "));

        if (numeros%2 ==0){ 
        
        console.log("Este número é par")
        
        }
    
        
        else{
            console.log("Este número é impar")
        }  }
    function numCrescente(){
        let numero1 = parseFloat(prompt( "Digite o primeiro número:"));

        let numero2 = parseFloat(prompt( "Digite o segundo número:"));
        
        let numero3 = parseFloat(prompt( "Digite o terceiro número:"));
        
        
        // verifica se eles estão em ordem crescente.
        
        if   (numero1 < numero2 && numero2 < numero3 ) {
        console.log("Estes números estão em ordem crescente!! " ) }
        
      
        
        else {
            console.log("Estes números NÃO estão em ordem crescente!! " )  }}
    
    // ---------------------------

     let opcao= window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exemplo login")

     while (opcao != "sair"){
        
        
        switch (opcao) {
            case "1":
               maioridadeIfElse()
               break;
 
                break;
        
           case "4":
               contagemregressiva()
                break;
        
           case "5":
               num1a10()
                break;
        
           case "6":
            numpar1a20()
                break;
        
           case "7":
               num1a10()
                break;
        
           case "8":
               descontocompra()
                break;
        
           case "9":
            parOuImpar()
                break;
        
           case "10":
            numCrescente()
                break;
        
            default:
                break;

        
            }     opcao= window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exemplo login")
        }
       

        
   







// ;;

// let opcao = ;

// // while =enquanto 
// while (opcao !== "Sair"){
   
// salario += 100;

// console.log("Executou um exercicio, agora escolha outro número de 1 a 6 para ver minha genealidade: " + opcao