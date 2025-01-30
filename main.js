"use strict"

const boataoTrocarImagem =document.getElementById("trocar-imagem")

function trocarImagem(){
    const body = document.querySelector('body');

    const imagens = [
        'var(--imagem1)',
        'var(--imagem2)',
        'var(--imagem3)',
        'var(--imagem4)',
        'var(--imagem5)'
    ];

    let indice = 0;

    return function(){
        indice = (indice + 1) % imagens.length;
        body.style.backgroundImage = imagens[indice];
    }

}

const trocarFundo = trocarImagem()
        
boataoTrocarImagem.addEventListener("click", trocarFundo)