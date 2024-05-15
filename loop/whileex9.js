// Faça um programa que receba um número do usuário e mostre
// // no console a contagem regressiva até 0.


let num = parseInt(prompt("Olá, digite um número para a contagem regressiva: "));

console.log("A contagem regressiva está comecando em: " + num)


while(num >=0){
    console.log(num);
    num--
}
    // ou
    // let num = parseInt(prompt("Olá, digite um número para a contagem regressiva: "));

    // for(let cont = num; cont >=0; cont--){
    //         console.log(cont);
    //     };