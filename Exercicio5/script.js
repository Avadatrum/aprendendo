function gerarTabuada() {
    let n1 = document.querySelector('.dn')
    numero = Number(n1.value)
    let resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''
    resultado.innerHTML = `<span class="resultado2">Você gerou a tabuada de ${numero}</span><br><br>`
    for (let i = 1; i <= 10; i++) {
        let res = numero * i;
        resultado.innerHTML += `<span class="alinhar">${numero} x ${i} =    <span class="resultado-numero">  ${res}  </span><br></span>`;
    }
}