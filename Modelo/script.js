function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    // let hora = data.getHours()
    let hora =
        msg.innerHTML = `Agora são ${hora} horas..`
    if (hora >= 6 && hora < 12) {
        img.src = './img/amor.jpg'
        document.body.style.background = 'red';
    } else if (hora >= 13 && hora < 18) {
        img.src = './img/centro.jpeg'
        document.body.style.background = 'yellow';
    } else {
        img.src = './img/golfinhos.png'
        document.body.style.background = 'blue';
    }
}