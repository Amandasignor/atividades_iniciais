let botao = document.getElementById('botao')
botao.addEventListener('click', function() {

    let valor1 = document.getElementById('valor1').value
    let valor2 = document.getElementById('valor2').value
    fetch('exemplo.php?valor1='+valor1+'&valor2='+valor2).then(function(resultado){
        return resultado.text();
    }).then(function(texto) {

        let mensagemAntes = document.getElementById('mensagemAntes');
        mensagemAntes.innerText = "valores antes da troca: A = "+valor1+", B = "+valor2
        let mensagem = document.getElementById('mensagemDepois');
        mensagem.innerText = texto
}).catch(function(erro) {
    console.error(erro)
})

})