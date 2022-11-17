function somaNumeros (n1,n2) {
    return console.log('resultado', n1 + n2) 
}

somaNumeros(2 , 3)
somaNumeros(50, 62)


function calculaMedia (nomeAluno, nota1, nota2, nota3) {
    let resultado = (nota1 + nota2 + nota3)/3
    return console.log('A média do aluno', nomeAluno, 'é', resultado.toFixed(2))
}

calculaMedia('Orlando', 6, 8, 5)

const decideNumero = (numero) => {
    if (numero >= 6) {
        return console.log('O número ', numero, 'é maior que 6')
    } else{
        return console.log('O número ', numero, 'é menor que 6')
    }
}
decideNumero(45)

