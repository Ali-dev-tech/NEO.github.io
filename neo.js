var menu = document.querySelector('.nav-menu')
var menuLinks = document.querySelector('#mobile-menu')
var navbar = document.querySelector('.navbar')
var homeText = document.querySelector('.hero-section-text')
console.log(homeText)

menuLinks.addEventListener('click',function(){
    menu.classList.toggle('jadoo')
    menuLinks.classList.toggle("is-active")
    homeText.classList.toggle('display')
   
    
})
console.log(menu);

