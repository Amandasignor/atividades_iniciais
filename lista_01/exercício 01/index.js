
let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    let nome = document.getElementById("nome").value

    document.getElementById("saudaçao").innerText 
        = "olá " + nome + ", este é meu site"

})