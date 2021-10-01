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


/****************************/
/* CODE VOOR DE KOOPKNOPPEN */
/****************************/

/* alle koopknoppen opzoeken in de HTML */
/* omdat er meer buttons geselecteerd moeten worden, wordt querySelectorAll gebruikt (en niet querySelector) */
/* het gevonden lijstje met koopknoppen (een array) in de variabele 'addToCartButtons' opslaan */
var toevoegenAanMandjeButtons = document.querySelectorAll("button.shop");

/* elke koopknop laten luisteren naar een klik */
/* na een klik de functie 'updateShoppingCart' uitvoeren */
toevoegenAanMandjeButtons[0].addEventListener("click", updateMandje);
toevoegenAanMandjeButtons[1].addEventListener("click", updateMandje);
toevoegenAanMandjeButtons[2].addEventListener("click", updateMandje);
toevoegenAanMandjeButtons[3].addEventListener("click", updateMandje);


/* als er op een koopknop is gedrukt - het winkelwagentje updaten */
function updateMandje() {
  /* het getal (de span) in de winkelwagen-link in de nav opzoeken */
  /* die span in de variabele 'shoppingCartAmount' opslaan */
  let mandjeAmount = document.querySelector(".winkelmandje span");
  
  /* het huidige aantal schoenen in  de shopping cart bepalen */
  let currentAmount = mandjeAmount.innerHTML;
  /* dat is een string - dus even omzetten naar een getal */
  currentAmount = parseInt(currentAmount);
  
  /* het nieuwe aantal schoenen berekenen */
  let newAmount = currentAmount + 1;
  
  /* tenslotte het nieuwe aantal schoenen in de HTML zetten */
  mandjeAmount.innerHTML = newAmount;
}