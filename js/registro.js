function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;

    // Verificar si los campos están vacíos
    if (nombre === "" || email === "" || contraseña === "") {
        alert("Por favor, complete todos los campos.");
        return false; // Evita que el formulario se envíe
    }
    return true; // Envía el formulario si todos los campos están completos
}