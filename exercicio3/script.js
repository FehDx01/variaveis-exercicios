const nome = prompt("Informe seu nome completo")

const nasc = prompt("Informe sua data de Nascimento:'dd/mm/aaaa'")

let endc = prompt("Qual seu endereço?")

const cadastro = Number(prompt("Informe seu CPF"))

let formacao = prompt("Qual seu grau de escolaridade?")

const direcao = confirm("possui CNH?")

const familia = Number(prompt("Quantos filhos você tem?"))

let trabalho = prompt("Qual seu cargo atual?")

let remun = Number(prompt("Qual seu salário atual?"))

let comiss = confirm("Você recebe comissão?")
// se sim, "ok", se não "cancelar"

const admin = (prompt("Informe o ano da sua admissão:'dd/mm/aaaa"))

console.log(typeof nome)
console.log(typeof nasc)
console.log(typeof endc)
console.log(typeof cadastro)
console.log(typeof formacao)
console.log(typeof direcao)
console.log(typeof familia)
console.log(typeof trabalho)
console.log(typeof remun)
console.log(typeof comiss)

console.log ("Me chamo", nome, "sou nascido aos", nasc, "e moro na", endc, "meu CPF é número", cadastro, "tenho", formacao, "e", direcao);
console.log("Tenho", familia, "e atualmente trabalho na função de", trabalho, "com remuneração atual de", remun, "e atualmente recebo comissão?", comiss, "tendo sido admitido aos", admin)


