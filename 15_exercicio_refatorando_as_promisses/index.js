
async function imcNumber(height, weight) {
    if (typeof height == ! "number" || typeof weight == ! "number") {
        return Promise.reject('Argumentos inforamdos não são do tipo número!!!')
    }

    return weight / (height * height)
}

async function imcString(weight, height) {
    try {
        console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)

        const result = await imcNumber(weight, height)

        console.log(`O resultado do IMC foi de ${result}.`)

        if (result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    } catch (error) {
        console.log(error)
    }
}
imcString(71, 1.74)
imcString(48, 1.60)
imcString(71, "texto")
imcString(82, 1.72)
imcString(120, 1.80)