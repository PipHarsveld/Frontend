/***************************/
/* CODE VOOR HAMBURGERMENU */
/***************************/
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


/****************************/
/* CODE VOOR DE KOOPKNOPPEN */
/****************************/

/* alle koopknoppen opzoeken in de HTML en de array opslaan in de variabele */
var toevoegenAanMandjeButtons = document.querySelectorAll("button.shop");

/* na een klik op één van de buttons uit de array, de functie uitvoeren */
toevoegenAanMandjeButtons[0].addEventListener("click", updateMandje);
toevoegenAanMandjeButtons[1].addEventListener("click", updateMandje);
toevoegenAanMandjeButtons[2].addEventListener("click", updateMandje);
toevoegenAanMandjeButtons[3].addEventListener("click", updateMandje);
toevoegenAanMandjeButtons[4].addEventListener("click", updateMandje);
toevoegenAanMandjeButtons[5].addEventListener("click", updateMandje);
toevoegenAanMandjeButtons[6].addEventListener("click", updateMandje);
toevoegenAanMandjeButtons[7].addEventListener("click", updateMandje);

/* als er op een koopknop is gedrukt - het winkelwagentje updaten */
function updateMandje() {
  /* het getal (de span) in de winkelwagen-link in de nav opzoeken en die opslaan in de variabele*/
  let hoeveelheidInMandje = document.querySelector(".winkelmandje span");

  /* het huidige aantal planten in het mandje bepalen */
  let huidigeHoeveelheid = hoeveelheidInMandje.innerHTML;
  /* dat is een string - omzetten naar een getal */
  huidigeHoeveelheid = parseInt(huidigeHoeveelheid);
  
  /* het nieuwe aantal planten berekenen */
  let nieuweHoeveelheid = huidigeHoeveelheid + 1;
  
  /* het nieuwe aantal planten in de HTML zetten */
  hoeveelheidInMandje.innerHTML = nieuweHoeveelheid;
}




/******************************/
/* CODE VOOR SLIDER PRODUCTEN */
/******************************/
var buttonProductPagina1 = document.querySelector(".button1");
var buttonProductPagina2 = document.querySelector(".button2");
var containerVanProducten = document.querySelector("#overzichtspagina main section:nth-of-type(2) section");

buttonProductPagina1.addEventListener("click", naarVorigePagina);
buttonProductPagina2.addEventListener("click", naarVolgendePagina);

function naarVorigePagina(){
  containerVanProducten.classList.add("vorigePagina");
  containerVanProducten.classList.remove("volgendePagina");

  buttonProductPagina1.classList.add("active");
  buttonProductPagina2.classList.remove("active");
}

function naarVolgendePagina(){
  containerVanProducten.classList.add("volgendePagina");
  containerVanProducten.classList.remove("vorigePagina");

  buttonProductPagina2.classList.add("active");
  buttonProductPagina1.classList.remove("active");
}


