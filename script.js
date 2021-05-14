// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

function calcular() {

let adultos = document.getElementById("adultos").value
let criancas = document.getElementById("criancas").value
let duracao = document.getElementById("duracao").value

let qtdCarne = adultos * refDuracaoCarne(duracao) + ((criancas * refDuracaoCarne(duracao)) / 2)
let qtdCerveja = adultos * refDuracaoCerveja(duracao)
let qtdBebida = adultos * refDuracaoBebida(duracao) + ((criancas * refDuracaoBebida(duracao)) / 2)

    let resultadoFinal = document.getElementById('Resultado')

    resultadoFinal.innerHTML = `<p>${qtdCarne / 1000} Kg de Carne`
    resultadoFinal.innerHTML += `<p>${qtdCerveja / 1000} Litros de cerveja`
    resultadoFinal.innerHTML += `<p>${qtdBebida / 1000} Litros de Refrigerante/Água`
}

function refDuracaoCarne(duracao) {
    if(duracao >= 6) {
        return 600
    } else {
        return 400
    }
}
function refDuracaoCerveja(duracao) {
    if(duracao >= 6) {
        return 3500
    } else {
        return 2000
    }
}
function refDuracaoBebida(duracao) {
    if(duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}
