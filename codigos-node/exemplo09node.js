
// Importandoum Modulo 'fs' (file System)
const fs = require('fs');

console.log("Iniciando nosso script ...");


const dia = new Date()
const usuario = "Renan santos"        
const mensagem = "Log do dia : " + dia.getDate() + "/" + (dia.getMonth() + 1) + "\nO usuário acessou o sistema :\n"
+ usuario + " " + dia.getDate() + "/" + (dia.getMonth()+1) + " " + dia.getHours() + " : "+ dia.getMinutes();

// Escrever o arquivo de forma sincrona
fs.writeFileSync("arquivo07.txt",mensagem)

try {
    fs.writeFileSync("arquivo07.txt",mensagem)
    console.log("Arquivo criado com sucesso.")
} catch (erro){
    console.error("Desculpe-me, ocorreu um erro ao escrever o arquivo> ",erro)
}
console.log("Finaliznado nosso script ...");