function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos .`
    if(hora >=0 && hora <12){
        img.src = "fotomanha.png"
        document.body.style.backgroundColor='#A05F2C'
    }else if(hora >= 12 && hora < 18){
        img.src = "fototarde.png"
        document.body.style.backgroundColor = '#DA3E0F'
    }else{
        img.src = "fotonoite.png"
        document.body.style.backgroundColor = '#3C2E47'
    }
}