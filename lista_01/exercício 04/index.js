let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    let nome = document.getElementById("idade").value

    if (idade <= 18) {
    document.getElementById("resultado").innerText = ("menor de idade")
    }else{
    document.getElementById("resultado").innerText = ("maior de idade")
    }
   
})