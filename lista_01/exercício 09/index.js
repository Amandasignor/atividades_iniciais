function atualizarhora() {

let date = new Date()
let horas = date.getHours()
let minutos = date.getMinutes()
let segundos = date.getSeconds()

document.getElementById("resultado").innerText = horas + ":" + minutos + ":" + segundos
}
atualizarhora()

setInterval(atualizarhora,1000)