function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var titulo = document.getElementById('titulo')
    var arroba = document.getElementById('arroba')


    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        img.src = '_images/001.jpg'
        document.body.style.background = '#E6B369'
        titulo.style.color = '#593202'
        arroba.style.color = '#593202'

    } else if (hora >= 12 && hora < 16) {
        img.src = '_images/002.jpg'
        document.body.style.background = '#88C9F2'
        titulo.style.color = '#2A2C30'
        arroba.style.color = '#2A2C30'
        
    } else if (hora >= 16 && hora < 18){
        img.src = '_images/003.jpg'
        document.body.style.background = '#F27405'
        titulo.style.color = '#260801'
        arroba.style.color = '#260801'

    } else if (hora >= 18 && hora < 24) {
        img.src = '_images/004.jpg'
        document.body.style.background = '#1F2C3F'
        titulo.style.color = 'white'
        arroba.style.color = 'white'

    } else {
        img.src = '_images/005.jpg'
        document.body.style.background = '#151110'
        titulo.style.color = '#FEFFEA'
        arroba.style.color = '#FEFFEA'
    }
}