
function reproducirEscenaSiete() {

  document.getElementById("btn-esc7").style.display = "none";
  document.getElementById("teletransportacion").style.display = "none";
  document.getElementById("fondoesc7").style.display = "block";
  document.getElementById("escena7").style.display = "block";
  document.getElementById("narradoresc7").play();

  setTimeout(function () {
    document.getElementById("escena7").style.display = "none";
    document.getElementById("narradoresc7").pause();

    document.getElementById("escena7img").style.display = "block";
  }, 12000);

}
/* ESCENA ocho */
function reproducirEscenaOcho() {

  document.getElementById("btn-esc8").style.display = "none";
  document.getElementById("escena8img").style.display = "none";


  document.getElementById("escena8").style.display = "block";
  document.getElementById("narradoresc8").play();


  setTimeout(function () {
    document.getElementById("escena8").style.display = "none";
    document.getElementById("narradoresc8").pause();

    document.getElementById("escena8img").style.display = "block";
  }, 6000);
}
/* ESCENA nueve */
function reproducirEscenaNueve() {

  document.getElementById("btn-esc9").style.display = "none";
  document.getElementById("escena9img").style.display = "none";


  document.getElementById("escena9").style.display = "block";
  document.getElementById("narradoresc9").play();


  setTimeout(function () {
    document.getElementById("escena9").style.display = "none";
    document.getElementById("narradoresc9").pause();

    document.getElementById("escena9img").style.display = "block";
  }, 13200);
}
/* ESCENA diez */
function reproducirEscenaDiez() {

  document.getElementById("btn-esc10").style.display = "none";
  document.getElementById("escena10img").style.display = "none";


  document.getElementById("escena10").style.display = "block";
  document.getElementById("narradoresc10").play();


  setTimeout(function () {
    document.getElementById("escena10").style.display = "none";
    document.getElementById("narradoresc10").pause();

    document.getElementById("escena10img").style.display = "block";
  }, 15000);
}
/* ESCENA once */
function reproducirEscenaOnce() {

  document.getElementById("btn-esc11").style.display = "none";
  document.getElementById("escena11img").style.display = "none";


  document.getElementById("escena11").style.display = "block";
  document.getElementById("narradoresc11").play();


  setTimeout(function () {
    document.getElementById("escena11").style.display = "none";
    document.getElementById("narradoresc11").pause();

    document.getElementById("escena11img").style.display = "block";
  }, 1100);
}
/* ESCENA doce */
function reproducirEscenaDoce() {

  document.getElementById("btn-esc12").style.display = "none";
  document.getElementById("escena12img").style.display = "none";


  document.getElementById("escena12").style.display = "block";
  document.getElementById("narradoresc12").play();


  setTimeout(function () {
    document.getElementById("escena12").style.display = "none";
    document.getElementById("narradoresc12").pause();

    document.getElementById("escena12img").style.display = "block";
  }, 9000);
}