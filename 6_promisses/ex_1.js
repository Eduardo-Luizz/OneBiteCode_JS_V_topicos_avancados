// Uma promise é uma forma mais fácil de trabalhar com códigos assíncronos no javascript. 
// Ela é um objeto que é instanciado através da classe Promise e recebe uma função como parâmetro. 
// Essa função é executada quando a promise é criada, porém sem bloquear a execução do código:
const p = new Promise(() => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        console.log('Resolvendo a promise...')
    }, 3 * 1000)
})

console.log(p)