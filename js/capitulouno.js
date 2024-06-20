/*
var flecha = document.getElementById('flecha');
var help = document.getElementById('help-active');

help.addEventListener('click', function () {
  flecha.style.display = 'none';
}); */

/* ESCENA UNO */

var btnEsc1 = document.getElementById('btn-esc1');
var audio = document.getElementById('narradoresc1');
var cartuchoGif = document.querySelector('.cartucho');
var cartuchoImg = document.getElementById('img-cartucho');

btnEsc1.addEventListener('click', function () {
  btnEsc1.style.display = 'none';
  audio.play();
  cartuchoGif.style.display = 'block';

  // Ocultar el gif después de 4 segundos y mostrar cartuchoImg
  setTimeout(function () {
    cartuchoGif.style.display = 'none';
    cartuchoImg.style.display = 'block';
  }, 4000);
});

/* ESCENA DOS */

function reproducirEscena() {
  // Ocultar el botón y la imagen al hacer clic
  document.getElementById("btn-esce2-02").style.display = "none";
  document.getElementById("imgheidi-esc2").style.display = "none";

  // Reproducir la animación y el audio
  document.getElementById("escena2heidi").style.display = "block";
  document.getElementById("AudioHeidiesc2").play();

  // Detener la reproducción después de 10 segundos
  setTimeout(function () {
    document.getElementById("escena2heidi").style.display = "none";
    document.getElementById("AudioHeidiesc2").pause();
  }, 11000);
}

function reproducircartuchodos() {
  // Ocultar el botón al hacer clic
  document.getElementById("btn-esc2").style.display = "none";

  // Reproducir la animación y el audio
  document.getElementById("cartuchoESC2").style.display = "block";
  document.getElementById("narradoresc2").play();

  // Detener la reproducción después de 9 segundos (9000 milisegundos)
  setTimeout(function () {
    document.getElementById("cartuchoESC2").style.display = "none";
    /* document.getElementById("narradoresc2").pause();  */// Pausar reproducción de audio
  }, 8000);
}

/* ESCENA TRES */
function reproduciresctres() {
  // Ocultar el botón y la imagen al hacer clic
  document.getElementById("btn-esc3").style.display = "none";
  document.getElementById("escena3img").style.display = "none";

  // Reproducir la animación y el audio
  document.getElementById("escena3").style.display = "block";
  document.getElementById("narradoresc3").play();

  // Detener la reproducción 
  setTimeout(function () {
    document.getElementById("escena3").style.display = "none";
    document.getElementById("narradoresc3").pause();
    // Mostrar la imagen nuevamente 
    document.getElementById("escena3img").style.display = "block";
  }, 25000);
}

/* ESCENA cuatro */
function reproduciresccuatro() {

  document.getElementById("btn-esc4").style.display = "none";
  document.getElementById("escena4img").style.display = "none";


  document.getElementById("escena4").style.display = "block";
  document.getElementById("narradoresc4").play();


  setTimeout(function () {
    document.getElementById("escena4").style.display = "none";
    document.getElementById("narradoresc4").pause();

    document.getElementById("escena4img-end").style.display = "block";
  }, 14000);
}
/* ESCENA cinco */
function reproduciresccinco() {

  document.getElementById("btn-esc5").style.display = "none";
  document.getElementById("escena5img").style.display = "none";


  document.getElementById("escena5").style.display = "block";
  document.getElementById("narradoresc5").play();


  setTimeout(function () {
    document.getElementById("escena5").style.display = "none";
    document.getElementById("narradoresc5").pause();

    document.getElementById("escena5img").style.display = "block";
  }, 15000);
}
/* ESCENA seis */

function reproducirEscenaSeis() {
  // Ocultar elementos de la escena actual
  document.getElementById("btn-esc6").style.display = "none";
  document.getElementById("escena6img").style.display = "none";
  document.getElementById("fondoesc6").style.display = "none";

  // Mostrar animación de teletransportación y reproducir audio de magia
  document.getElementById("teletransportacion").style.display = "block";
  document.getElementById("magia").play();

  // Después de 4 segundos, ocultar animación de teletransportación y pausar audio de magia
  setTimeout(function () {
    document.getElementById("teletransportacion").style.display = "none";
    document.getElementById("magia").pause();

    // Mostrar nuevamente fondo y gif de la escena seis
    setTimeout(function () {
      document.getElementById("fondoesc6").style.display = "block";
      document.getElementById("escena6").style.display = "block";
      document.getElementById("narradoresc6").play();

      // Pausar la narración después de 27 segundos
      setTimeout(function () {
        document.getElementById("escena6").style.display = "none";
        document.getElementById("narradoresc6").pause();
      }, 27000); // Después de 27 segundos

      setTimeout(function () {
        document.getElementById("teletransportacion").style.display = "block";
      }, 27000); // Después de 4 segundos
    }) // Después de 27 segundos
  }, 4000); // Después de 4 segundos
}


/* function reproducirescseis() {
 
  document.getElementById("btn-esc6").style.display = "none";
  document.getElementById("escena6img").style.display = "none";
  document.getElementById("fondoesc6").style.display = "none";
  
 
  document.getElementById("teletransportacion").style.display = "block";
  document.getElementById("magia").play();
  

  setTimeout(function() {
    document.getElementById("teletransportacion").style.display = "none";
    document.getElementById("magia").pause();

  }, 4000); 
} */