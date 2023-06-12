// Por fim, a prática comum ao usar as promises é retorná-las no final de uma função, assim elas serão executadas quando a função for chamada:
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

console.log(p)

setTimeout(() => {
    console.log(p)
}, 5 * 1000)