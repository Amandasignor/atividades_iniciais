
let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    let nome = document.getElementById("nascimento").value

    document.getElementById("resultado").innerText = 2024 - nome
        

})