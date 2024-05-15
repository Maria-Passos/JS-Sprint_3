// Imprimir os primeiros 10 números da sequência de Fibonacci.

//inicializar os primeiros dois números a sequencia de fibonacci

let fib1= 1;
let fib2= 1;

console.log("Os primeiros 10 números da sequencia de Fibonacci são: ");
console.log(fib1);
console.log(fib2);

// Intera para calcular e imprimir os proximos 8 números da sequencia.
for(let i = 2; i < 10; i++){
    let nextFib = fib1 + fib2;
    console.log(nextFib);

    //atualizar os valores de fib1 e fib2 para os proximos calculos e ter a sequencia.


fib1 = fib2;
fib2 = nextFib;
}



// // "1,1,2,3,5,8,13,21,34,55"




