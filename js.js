'use strict'

let crapRadio = document.getElementById('crapRadio'),
    blackRadio = document.getElementById('blackRadio'),
    thrashRadio = document.getElementById('thrashRadio'),
    punkRadio = document.getElementById('punkRadio'),
    body = document.querySelector('.body-inner'),
    startBlock = document.querySelector('.start'),
    form = document.querySelector('.form'),
    poser = document.querySelector('.poser'),
    black = document.querySelector('.black'),
    thrash = document.querySelector('.thrash'),
    punk = document.querySelector('.punk'),
    crapItem = document.getElementById('crapItem');

function confirmMusicGenre() {
    if (crapRadio.checked) {
        form.classList.add('disabled')
        poser.classList.remove('disabled')
        console.log(1)
        return
    } else if (blackRadio.checked) {
        startBlock.classList.add('disabled')
        body.classList.add('black_bg')
        black.classList.add('active')
        console.log(2)
        return
    } else if (thrashRadio.checked) {
        startBlock.classList.add('disabled')
        body.classList.add('thrash_bg')
        thrash.classList.add('active')
        console.log(3)
        return
    } else if (punkRadio.checked) {
        startBlock.classList.add('disabled')
        body.classList.add('punk_bg')
        punk.classList.add('active')
        console.log(4)
        return
    }
}

function getBack() {
    form.classList.remove('disabled')
    poser.classList.add('disabled')
    crapItem.classList.add('disabled')
}