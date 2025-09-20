function contar() {
    let inicioinput = document.querySelector('.inicio input')
    let fiminput = document.querySelector('.fim input')
    let passoinput = document.querySelector('.passo input')
    let resultado = document.querySelector('.resultado')
    if (inicioinput.value === '' || isNaN(Number(inicioinput.value)) ||
        fiminput.value === '' || isNaN(Number(fiminput.value)) ||
        passoinput.value === '' || isNaN(Number(passoinput.value))) {
        resultado.innerHTML = '❌ Digite números válidos!'
        return
    }
    let inicio = Number(inicioinput.value)
    let fim = Number(fiminput.value)
    let passo = Number(passoinput.value)
    if (passo == 0) {
        alert('❌ O passo não pode ser zero! Digite um valor maior que zero.')
        passo = 1
    }
    resultado.innerHTML = '';
    resultado.innerHTML = '🔢 Contagem: '
    if (inicio <= fim) {
        for (let i = inicio; i <= fim; i += passo) {
            resultado.innerHTML += `${i} -> `;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            resultado.innerHTML += `${i} -> `
        }
    }
    resultado.innerHTML = resultado.innerHTML.slice(0, -2) + ' 🏁'
}