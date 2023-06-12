// console.log('Programa iniciado!')

// const timeoutId = setTimeout(() => {
//     console.log('2 segundos se passaram desde que o programa foi iniciado.')
// }, 2 * 1000)

console.log('Programa iniciado!')

const timeoutId = setTimeout(() => {
    console.log('2 segundos se passaram desde que o programa foi iniciado.')
}, 2 * 1000)

clearTimeout(timeoutId)