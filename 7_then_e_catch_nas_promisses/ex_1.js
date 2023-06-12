// Um cenário muito comum é que precisemos executar um código assim que a promise for resolvida, e para isso usamos o método .then(). 
// Ele nos permite definir justamente a função “resolve” da promise, ou seja, a função que recebe o resultado como parâmetro e é chamada quando a promise é bem sucedida:
function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 3 * 1000)
    })
}

const p = execute()

p.then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
})