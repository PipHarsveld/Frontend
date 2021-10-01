// // JavaScript Document
// var menuOpenenIcon = document.querySelector("header nav ul li button");
// var uitgeklaptMenu = document.querySelector("main section:nth-of-type(7) nav");
// var menuSluitenIcon = document.querySelector("main section:nth-of-type(7) nav img:nth-of-type(2)");

// JavaScript Document
var menuOpenenIcon = document.querySelector("header > button");
var uitgeklaptMenu = document.querySelector("header nav");
var menuSluitenIcon = document.querySelector("header nav button");

//Menu openen
menuOpenenIcon.addEventListener("click", toggleMenu);
//Menu sluiten
menuSluitenIcon.addEventListener("click", toggleMenu);

function toggleMenu(){
    uitgeklaptMenu.classList.toggle("uitgeklaptMenu");
}