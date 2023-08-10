const form = document.getElementById('form-atividade')
const imgaprovado = '<img src="./images/aprovado.png" alt = "emoji celebrando" />'
const imgreprovado = '<img src="./images/reprovado.png" alt = "emoji decepcionado" />'
const atividades = []
const notas = []
const spanaprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanreprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaminima = Number(window.prompt('Digite a nota minima'))



let linhas = ' '
form.addEventListener('submit', function (e) {
    e.preventDefault()
    adcionalinha()
    atualizatabela()
    atualizamediafinal()
})

function adcionalinha() {
    const inputnomeatividade = document.getElementById('nome-atividade')
    const inputnotaatividade = document.getElementById('nota-atividade')

    if (atividades.includes(inputnomeatividade.value)) {
        alert(`A atividade ${inputnomeatividade.value} ja foi inserida`)
    } else {
        atividades.push(inputnomeatividade.value)
        notas.push(Number(inputnotaatividade.value))

        let linha = '<tr>'
        linha += `<td>${inputnomeatividade.value}</td>`
        linha += `<td>${inputnotaatividade.value}</td>`
        linha += `<td>${inputnotaatividade.value >= notaminima ? imgaprovado : imgreprovado}</td>`
        linha += `</tr>`

        linhas += linha
    }

    inputnomeatividade.value = ' '
    inputnotaatividade.value = ' '
}

function atualizatabela() {
    const corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML = linhas
}

function atualizamediafinal() {
    const mediafinal = calculamediafinal()

    document.getElementById('mediafinal-valor').innerHTML = mediafinal
    document.getElementById('mediafinal-resultado').innerHTML = mediafinal >= notaminima ? spanaprovado : spanreprovado
}

function calculamediafinal() {
    let somanotas = 0

    for (let c = 0; c < notas.length; c++) {
        somanotas += notas[c]
    }

    return somanotas / notas.length
}
