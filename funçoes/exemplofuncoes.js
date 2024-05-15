function saudacao () {
    let nomePessoa = prompt("Digite seu nome: ")

    let horaAtual = new Date().getHours()

    if (horaAtual > 6  && horaAtual < 13) {
        window.alert("Bom dia" + nomePessoa)
    } else if (horaAtual >= 13 && horaAtual < 18) {
        window.alert("Boa tarde" + nomePessoa)
    } else {
        window.alert("Boa Noite" + nomePessoa)
    }

}

saudacao()


function somar (num1, num2, num3){
    let soma= num1+num2+num3
    return soma

}

let resultado = somar (5,6, 9)

console.log("O resultado é: " + resultado);

//exemplos de funcoes
// window.alert("texto")
// console.log("texto")
// window.prompt("texto")




// Exemplo objeto ps:bom para formulario.

let professor = {
    nome: "Thiago",
    sobrenome: "Nascimento",
    idade: 25
}



let professor = {}

professor.nome = prompt("Digite o nome")
professor.sobrenome = prompt()

// com o . a gente acessa o valor da propriedade no console
// ex: professor.nome


