function mudarImagem(img){
    let body = document.body;

    switch(img){
        case 'img1': body.style.backgroundImage = 'url(carro1.jpg)'; break;
        case 'img2': body.style.backgroundImage = 'url(carro2.jpg)'; break;
        case 'img3': body.style.backgroundImage = 'url(carro3.jpg)'; break;
        case 'img4': body.style.backgroundImage = 'url(carro4.jpg)'; break;
        case 'img5': body.style.backgroundImage = 'url(carro5.jpg)'; break;
    }
}