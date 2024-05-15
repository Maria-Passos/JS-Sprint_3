// // for - loop contato

// for(let num = 0; num <= 10; num++){
//     console.log(num);
// }   

// console,log para aparecer na tela do console. 


// //contagem regressiva

// for(let cont = 10; cont >=0; cont--){
//     console.log(cont);
// }


//while - loop condicional

let salario = 1000;

// while =enquanto 
while (salario < 5000){
    // salario = salario + 100;
    // ou
salario += 100;

console.log("O salario ainda é " + salario)

}

// do while- loop condicional, execulta uma vez depois ve a repeticao.


let aumento = 1000;

do{
    console.log("Esse é o: " + salario);

}while (salario < 5000);
// tem que ser depois da chave 



// bom para lista é (forEach)


//array- ele é uma estrutura onde a gente armazena uma lista dentro de uma variavel. 

let frutas = ["Banana", "Laranja", "Maça","Pitaya","Melancia"]


console.log(frutas[3])

// for it para cada serve para percorrer o array, para fazer alguma coisa em cada item

// frutas.forEach(fruta => {
//     console.log("A fruta é: " + fruta);
// });
    

// Percorrendo uma lista com for
// .length => quantidade que elementos dentro de um array
for(let indice = 0; indice < frutas.length; indice++){
    // indice ++ == indice +=1 ou seja se quiser pular de dois em dois é indice+=2
    console.log(frutas[indice])
}