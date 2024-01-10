function carregar() {

    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('imagem')

    var data = new Date()

    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        img.src = '_images/001.jpg'
    } else if (hora >= 12 && hora < 16) {
        img.src = '_images/002.jpg'
    } else if (hora >= 16 && hora < 18){
        img.src = '_images/003.jpg'
    } else if (hora >= 18 && hora < 24) {
        img.src = '_images/004.jpg'
    } else {
        img.src = '_images/005.jpg'
    }
}