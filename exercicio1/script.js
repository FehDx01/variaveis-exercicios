let nomeVariavel;
let idadeVariavel;


console.log(typeof nome)
console.log(typeof idade)

// Ao imprimir as variáveis, aparece erro undefined em ambas as linhas, em razão da ausência da atribuição de valor

const nomeDoUsuario = prompt("Qual é seu nome?")
let suaIdade = Number(prompt("Qual a sua idade?"))

console.log(typeof nomeDoUsuario)
console.log(typeof suaIdade)

//diferente da ausencia de valores atribuidos, com a pergunta ao usuário, será armazenada a informação prestada, sendo a primeira linha uma string e a segunda um number//

console.log("Olá", "meu nome é", nomeDoUsuario, "e tenho", suaIdade, "anos de idade")

