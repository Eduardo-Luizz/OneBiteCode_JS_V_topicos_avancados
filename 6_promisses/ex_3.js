// - Também podemos rejeitar a promise caso queiramos indicar que algo deu errado:

// Obs.: repare que nesse caso a rejeição da promise é como um erro no código, que se não for tratado adequadamente irá resultar no término da aplicação. 
// Veremos como fazer isso na próxima aula.
const p = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        if (1 + 1 === 2) {
            reject("Algo deu errado!")
        }
        console.log('Resolvendo a promise...')
        resolve('Resultado')
    }, 3 * 1000)
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 5 * 1000)