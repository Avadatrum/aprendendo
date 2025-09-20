let numeros = []

function adicionar() {
    let In = document.getElementById('numero')
    let number = Number(In.value)
    if (number < 1 || number > 100) {
        alert('Por favor, digite um número entre 1 e 100')
        return;
    }
    if (numeros.includes(number)) {
        alert(`O número ${number} já foi adicionado! Tente outro.`);
        return;
    }

    document.getElementById('resultado').innerHTML = ''
    numeros.push(number);

    let lista = document.getElementById('lista');
    let option = document.createElement('option');
    option.text = `Número ${number} adicionado`;
    lista.appendChild(option);

    In.value = ''
    In.focus();
}

function finalizar() {
    let soma = numeros.reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual;
    }, 0);
    let quantidade = numeros.length
    let maior = Math.max(...numeros)
    let menor = Math.min(...numeros)
    let media = soma / quantidade
    let res = document.getElementById('resultado');
    res.innerHTML = `<p>Ao todo, temos <strong>${quantidade}</strong> números cadastrados.</p>
    <p>O maior valor informado foi <strong>${maior}</strong>.</p>
    <p>O menor valor informado foi <strong>${menor}</strong>.</p>
    <p>Somando todos os valores, temos <strong>${soma}</strong>.</p>
    <p>A média dos valores digitados é <strong>${media.toFixed(1)}</strong>.</p>`
}