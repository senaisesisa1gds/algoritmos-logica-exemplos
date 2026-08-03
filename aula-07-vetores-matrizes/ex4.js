// Importação da biblioteca
const prompt = require('prompt-sync')()

// Vetor para armazenar os gols de cada time
let gols = []

console.log('== Calculadora de Gols ==')
console.log('')

// Coleta dos gols de cada time
for (let i = 0; i < 5; i++){
    gols[i] = parseInt(prompt(`Digite o nº de Gol's do ${i + 1}º time: `))
}

// Variáveis para lógica de determinação (Número de Gol's)
let acimaDe3 = 0
let ate3 = 0

// Lógica para percorrer o vetor e determinar quem fez mais de 3 Gol's
for (let i = 0; i < 5; i++) {
    if(gols[i] > 3) {
        acimaDe3++
    } else {
        ate3++;
    }
}

// Exibindo os resultados
console.log('')
console.log('== Resultados ==')
console.log('Times com mais de 3 Gols: ',acimaDe3)
console.log('Times com menos de 3 Gols: ',ate3)