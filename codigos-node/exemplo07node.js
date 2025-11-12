const readline = require('readline')

const rl = readline.createInterface({
    imput: process.stdin,
    output: process.stdount
})

console.log("---SOMA---")
console.log("Porfavor, digite dois números, para obter a soma")

rl.question("Digite o primeiro número:"); 
(numero1_str)=>{
    const numero1 = parseInt(numero1_str)
}

rl.question("Digite outro númeor:");
(numero2_str)=>{
    const numero02 = parseInt(numero2_str)
}

const soma = numero1+numero2_str

console.log("")
console.log("A soma dos números digitados é : ${soma}")