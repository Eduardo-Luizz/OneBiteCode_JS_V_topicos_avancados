const imcNumber = (height, weight) => {
    return new Promise((resolve, reject) => {
        console.log('Promisse e Função imcNumber em execução ...')
        setTimeout(() => {
            if (typeof height === "number" && typeof weight === "number") {
                const imc = weight / (height * height)
                resolve(imc)
            } else {
                reject("os valores informados não são do tipo number!!!!")
            }
        })
    })
}

const execute = imcNumber(1.77, 75)

execute.then((result) => {
    console.log(`A Função imcNumber e promisse foi resolvida. O IMC é ${result}`)
}).catch((err) => {
    console.log(`A promisse não pode ser resolvida. Por conta de que ${err}`)
});

const imcString = (height, weight) => {
    return new Promise((resolve, reject) => {
        console.log('Promisse e Função imcString em execução ...')
        setTimeout(() => {
            const imcPromise = imcNumber(height, weight)
            imcPromise.then((result) => {
                let message = ""

                switch (true) {
                    case (result < 18.5):
                        message = "magreza";
                        break;
                    case (result >= 18.5 && result <= 24.9):
                        message = "normal";
                        break;
                    case (result >= 25 && result <= 29.9):
                        message = "sobrepeso";
                        break;
                    case (result >= 30 && result <= 39.9):
                        message = "obesidade";
                        break;
                    case (result >= 40):
                        message = "obesidade grave";
                        break;
                    default:
                        message = "Valor inválido";
                        break;
                }
                resolve(message)
            }).catch((err) => {
                reject(err)
            })
        })
    })
}

const execute2 = imcString(1.77, 75)

execute2.then((result) => {
    console.log(`A Função imcString e promisse foi resolvida. O resultado é ${result}`)
}).catch((err) => {
    console.log(`A promisse não pode ser resolvida. Por conta de que ${err}`)
});