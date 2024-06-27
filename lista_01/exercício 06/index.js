let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    let newCor = generateColor()
    document.body.style.backgroundColor = newCor
})    
    
function generateColor() {
    const hexNumbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let cor = '#'
    for (let i = 0; i < 6; i++) {
        cor += hexNumbers[Math.floor(Math.random() * 16)]
    }

    return cor
    
}