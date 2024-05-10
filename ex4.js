// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

// Faça um programa que receba 4 notas de um aluno

let nota1 = parseFloat(prompt( "Digite a primeira nota: "));

let nota2 = parseFloat(prompt( "Digite a segunda nota: "));

let nota3 = parseFloat(prompt( "Digite a terceira nota: "));

let nota4 = parseFloat(prompt( "Digite a quarta nota: "));


// calcule e imprima a média aritmética das notas

let mediaNotas =  (nota1 + nota2 + nota3 + nota4) / 4   
console.log(mediaNotas);

// como formatar para só aparecer duas casas decimais depois da virgula. ex1,99.
// se for igual gasolina e o preco for 4,558 com esse codigo vai aparecer 4,56.
// media.tixed(2) é para formatar os valores.aparecer


console.log("A media das notas foi "+ mediaNotas.toFixed(2) + "! ");

// a mensagem de APROVADO para média superior ou igual a 7,0


if(mediaNotas >= 7) {
    console.log("Voce foi APROVADO!");
}
else if (mediaNotas < 7 && mediaNotas >=5)
console.log("Voce está de RECUPERAÇAO!")

else if (mediaNotas <= 5) {
console.log("Voce foi REPROVADO!")}

// RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


