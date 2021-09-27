// JavaScript Document
var menuOpenenIcon = document.querySelector("figure");
var uitgeklaptMenu = document.querySelector("main nav")
var MenuSluitenIcon = document.querySelector("main nav img:nth-of-type(2)")

//Menu openen
menuOpenenIcon.addEventListener("click", toggleMenu);
//Menu sluiten
MenuSluitenIcon.addEventListener("click", toggleMenu);

function toggleMenu(){
    uitgeklaptMenu.classList.toggle("uitgeklaptMenu");
}


