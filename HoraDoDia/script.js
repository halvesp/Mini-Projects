function load(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var date = new Date()
    var hora = date.getHours();
    var min = date.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if(hora >= 0 && hora < 12){
        img.src = './imgs/manha.png';
        document.body.style.background = '#e2cd9f'
    }else if(hora > 12 && hora <= 18){
        img.src = './imgs/tarde.png';
        document.body.style.background = '#b9846f'
    }else{
        img.src = './imgs/noite.png';
        document.body.style.background = '#515154'
        
    }
}    
    