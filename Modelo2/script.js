function clicar() {
    let praiaSelecionada = document.getElementById('selectPraia').value
    let res = document.getElementById('msg')
    if (praiaSelecionada == 'op1') {
        res.innerHTML = `<h3>Você selecionou a Praia da Pipa</h3>
        <img src="/Modelo/img/centro.jpeg" alt="Praia da Pipa" class="praia-imagem">`;
    } else if (praiaSelecionada == 'op2') {
        res.innerHTML = `<h3>Você selecionou a Praia do Amor</h3>
        <img src="/Modelo/img/amor.jpg" alt="Praia da Pipa" class="praia-imagem">`;
    } else if (praiaSelecionada == 'op3') {
        res.innerHTML = `<h3>Você selecionou a Praia dos Golfinhos</h3>
        <img src="/Modelo/img/golfinhos.png" alt="Praia da Pipa" class="praia-imagem">`;
    }
}