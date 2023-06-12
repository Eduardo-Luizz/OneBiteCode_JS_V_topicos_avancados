// Como visto no código acima, uma promise possui diferentes estados, que são: pendente (estado padrão), rejeitada e resolvida (ou cumprida). 
// A promise ficará em estado pendente até que seja resolvida utilizando o primeiro parâmetro da função usada na sua construção. 
// Esse primeiro parâmetro é uma função que “resolve” a promise e passa adiante o valor do resultado:
const p = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        console.log('Resolvendo a promise...')
        resolve('Resultado')
    }, 3 * 1000)
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 5 * 1000)