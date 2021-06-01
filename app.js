var menu = document.querySelector('.nav-menu')
var menuLinks = document.querySelector('#mobile-menu')

menuLinks.addEventListener('click',function(){
    menu.classList.toggle('jadoo')
    menuLinks.classList.toggle("is-active")
})