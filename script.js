var liste, listeler;
const indirimKod = "abc";
var i;
var pizzaFiyat = 0;
var malzeme;
var girilenKod;
var indirimYaz;
var hesapYaz;
function pizzaHesapla() {
  
  listeler = document.getElementById("pizzaBoyut");
  pizzaFiyat += listeler[listeler.selectedIndex].value;
  pizzaFiyat = parseFloat(pizzaFiyat);
  hesapYaz = document.getElementById("hesapYaz");

  malzeme = document.getElementsByName("malzeme");

  malzeme.forEach((i) => {
    if (i.checked) {
      pizzaFiyat = pizzaFiyat + 3;
    }
  });

  if(indirimKod.children>0){
    girilenKod = indirimYaz.children[1].children[0];
    if (girilenKod.value == indirimKod) {
      pizzaFiyat -= 10;
    }
    else{
        alert("Girilen kod gecersiz..!");
    }
  }

    hesapYaz.value =  pizzaFiyat;

 
  
}
function indirimKodGoster() {
  kodVar = document.getElementById("kodVar");

  if (kodVar.checked) {
    indirimYaz = document.querySelector(".indirimYaz");
    indirimYaz.style.display = "inline";
  } else {
    indirimYaz.style.display = "none";
  }
}
function temizle(){
    pizzaFiyat = 0;
    if(indirimYaz>0){
        girilenKod.value = "";
    }
    hesapYaz.value  = "";
}