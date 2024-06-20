 //BOTONUP
 function scrollarriba() {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 }
 
 document.getElementById('scrollup').addEventListener('click', scrollarriba);

 // Función para abrir la modal
 function abrirModal() {
  document.getElementById('videoModal').style.display = 'flex';
}

// Función para cerrar la modal
function cerrarModal() {
  document.getElementById('videoModal').style.display = 'none';
}

 //Alerta
    function mostrarAlert(titulo, mensaje, objetivo) {
    var alert = document.getElementById("alertBox");
    var alertTitle = document.getElementById("alertTitle");
    var alertMessage = document.getElementById("alertMessage");
    var alertObjetivo = document.getElementById("alertObjetivo");
    
    alertTitle.innerText = titulo;
    alertMessage.innerText = mensaje;
    alertObjetivo.innerText = objetivo;
    
    alert.style.display = "flex";
  }
  
  function cerrarAlert() {
    var alert = document.getElementById("alertBox");
    alert.style.display = "none";
  }
 //Alerta heidi
 function mostrarAlertHeidi(titulo, mensaje, objetivo) {
  var alert = document.getElementById("alertBoxHeidi");
  var alertTitleHeidi = document.getElementById("alertTitleHeidi");
  var alertMessageHeidi = document.getElementById("alertMessageHeidi");
  var alertObjetivoHeidi = document.getElementById("alertObjetivoHeidi");
  
  alertTitleHeidi.innerText = titulo;
  alertMessageHeidi.innerText = mensaje;
  alertObjetivoHeidi.innerText = objetivo;
  
  alert.style.display = "flex";
}

function cerrarAlertHeidi() {
  var alert = document.getElementById("alertBoxHeidi");
  alert.style.display = "none";
}
 //Alerta Dylan
 function mostrarAlertDylan(titulo, mensaje, objetivo) {
  var alert = document.getElementById("alertBoxDylan");
  var alertTitleDylan = document.getElementById("alertTitleDylan");
  var alertMessageDylan = document.getElementById("alertMessageDylan");
  var alertObjetivoDylan = document.getElementById("alertObjetivoDylan");
  
  alertTitleDylan.innerText = titulo;
  alertMessageDylan.innerText = mensaje;
  alertObjetivoDylan.innerText = objetivo;
  
  alert.style.display = "flex";
}

function cerrarAlertDylan() {
  var alert = document.getElementById("alertBoxDylan");
  alert.style.display = "none";
}
//Alerta Silenciador
function mostrarAlertSilen(titulo, mensaje, objetivo) {
  var alert = document.getElementById("alertBoxSilen");
  var alertTitleSilen = document.getElementById("alertTitleSilen");
  var alertMessageSilen = document.getElementById("alertMessageSilen");
  var alertObjetivoSilen= document.getElementById("alertObjetivoSilen");
  
  alertTitleSilen.innerText = titulo;
  alertMessageSilen.innerText = mensaje;
  alertObjetivoSilen.innerText = objetivo;
  
  alert.style.display = "flex";
}

function cerrarAlertSilen() {
  var alert = document.getElementById("alertBoxSilen");
  alert.style.display = "none";
}



 //Alerta video
 function mostrarAlertvideo(video) {
  var alert = document.getElementById("alertBox");
  var video = document.getElementById("alertvideo");
  
  alertvideo.innerText = video;
  
  alert.style.display = "flex";
}

function cerrarAlert() {
  var alert = document.getElementById("alertBox");
  alert.style.display = "none";
}
// menu burger
function toggleMenu() {
  var menuOverlay = document.getElementById("menuOverlay");
  if (menuOverlay.style.display === "block") {
      menuOverlay.style.display = "none";
  } else {
      menuOverlay.style.display = "block";
  }
}
