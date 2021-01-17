// This file is specificly meant to control the Logo animations

let logo = document.querySelector('.dreadlogo')
let logoLink = document.querySelector(`.logoLink`)

logoLink.addEventListener(`mouseover`, function(){
    logo.src = 'src/js/dreadScript/logoClose.png'
})

logoLink.addEventListener(`mouseout`, function(){
    logo.src = 'src/js/dreadScript/logoOpen.png'
})