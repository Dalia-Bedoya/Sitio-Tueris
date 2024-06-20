/* escena 13 */
function reproducirEscenaTrece() {

    document.getElementById("btn-esc13").style.display = "none";
    document.getElementById("escena13img").style.display = "none";


    document.getElementById("escena13").style.display = "block";
    document.getElementById("narradoresc13").play();


    setTimeout(function () {
        document.getElementById("escena13").style.display = "none";
        document.getElementById("narradoresc13").pause();

        document.getElementById("escena13img").style.display = "block";
    }, 20000);
}
/* escena 14 */
function reproducirEscenaCatorce() {

    document.getElementById("btn-esc14").style.display = "none";
    document.getElementById("escena14img").style.display = "none";


    document.getElementById("escena14").style.display = "block";
    document.getElementById("narradoresc14").play();


    setTimeout(function () {
        document.getElementById("escena14").style.display = "none";
        document.getElementById("narradoresc14").pause();

        document.getElementById("escena14img").style.display = "block";
    }, 9000);
}
/* escena 15 */
function reproducirEscenaQuince() {

    document.getElementById("btn-esc15").style.display = "none";
    document.getElementById("escena15img").style.display = "none";


    document.getElementById("escena15").style.display = "block";
    document.getElementById("narradoresc15").play();


    setTimeout(function () {
        document.getElementById("escena15").style.display = "none";
        document.getElementById("narradoresc15").pause();

        document.getElementById("escena15img").style.display = "block";
    }, 6000);
}
/* escena 16 */
function reproducirescPe() {

    document.getElementById("btn-esc16-00").style.display = "none";
    document.getElementById("escena16img").style.display = "none";


    document.getElementById("escena16").style.display = "block";
    document.getElementById("narradoresc16").play();


    setTimeout(function () {
        document.getElementById("escena16").style.display = "none";
        document.getElementById("narradoresc16").pause();

        document.getElementById("escena16img").style.display = "block";
    }, 20000);
}
/* silenciador */
function reproducirSilenciador() {

    document.getElementById("btn-esc16-20").style.display = "none";
    document.getElementById("silenciador").style.display = "none";


    document.getElementById("Esc-Silenciador").style.display = "block";
    document.getElementById("AudioBOOM").play();


    setTimeout(function () {
        document.getElementById("Esc-Silenciador").style.display = "none";
        document.getElementById("AudioBOOM").pause();
    }, 5000);
}

/* escena final */
function reproducirescFinal() {

    document.getElementById("btn-esc17").style.display = "none";
    document.getElementById("escena17img").style.display = "none";


    document.getElementById("escena17").style.display = "block";
    document.getElementById("narradoresc17").play();


    setTimeout(function () {
        document.getElementById("escena17").style.display = "none";
        document.getElementById("narradoresc17").pause();

        document.getElementById("escena17img-end").style.display = "block";
        document.getElementById("fin").style.display = "block";
    }, 20000);
}