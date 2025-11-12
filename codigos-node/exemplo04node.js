// importar o modulo 'fs' File System

const fs = require('fs');

console.log('Iniciando nosso script...');

const mensagem = 'Log do dia: O usuario acessou o sistema ' + Date();

fs.writeFileSync('log.txt', mensagem);

try {
    fs.writeFileSync('log.txt', mensagem);
    console.log('Arquivo "log.txt" escrito com sucesso! Modo Síncrono');
} catch (error) {
    console.error('Deu erro.', error);
}

console.log('...Script Finalizado...');