// Chamada da biblioteca
const prompt = require('prompt-sync')()

// Perguntar para o usuário qual o número
let numero = Number(prompt('Digite um número positivo: '))

// variáveis auxiliares para poder calcular
let contador = 1 // Variável para contagem
let soma = 0 // Variável para guardar o valor dos números somados.

// Laço ou "LOOP" para fazer a soma
// Enquanto o contador for menor ou igual ao número digitado, 
// o bloco será repetido
while (contador <= numero) {
    soma += contador
    // soma = soma + contador

    contador++
    // contador = contador + 1
}

// Exibindo os resultados
console.log("Resultado da soma: ", soma)
// console.log(`Resultado da soma:  ${soma}`)