const dia = document.getElementById('dia')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const lancamento = "30 may 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000

    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 / 60) %24
    const finalminutos = Math.floor(segTotal / 60) % 60
    const finalSegundos = Math.floor(segTotal) % 60

    dia.innerHTML = formatoTempo(finalDias)
    horas.innerHTML = formatoTempo(finalHoras)
    minutos.innerHTML = formatoTempo(finalminutos)
    segundos.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo (tempo){
    return tempo <10 ? '0'+ tempo : tempo
}

countDown()
setInterval(countDown, 1000)