// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". 
// Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.


// solicita ao usuario um nome de usuário
let username = prompt("Digite um nome de usuário: ")

let senha = prompt("Digite a senha: ");


// Verifique se o nome de usuario e "admin" E a senha é "senha123" .
// Caso SIM -> Exiba a mensagem de login bem sucedida.
// Caso NÃO -> Exiba a mensagem de usuário ou senha incorreta.

if(username == "admin" && senha =="senha123"){
    console.log("Login bem sucedido");

} else {
    console.log("Você não tem permissão de acesso!")
}

// == igual
//=== igual  e tipo de texto do string do dado
// | ou
// && ee

// Exiba uma mensagem indicando se o login foi bem-sucedido ou não.




