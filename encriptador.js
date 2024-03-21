document.getElementById("encriptarBtn").addEventListener("click", function() {
    var texto = document.getElementById("texto").value;
    
    if (texto.match(/[A-Z]/)) {
        alert("El texto no puede contener letras mayúsculas.");
        return;
    }
    
    var textoEncriptado = btoa(texto);
    document.getElementById("resultado").value = textoEncriptado;
});

document.getElementById("desencriptarBtn").addEventListener("click", function() {
    var textoEncriptado = document.getElementById("texto").value;
    var textoDesencriptado = atob(textoEncriptado);
    document.getElementById("resultado").value = textoDesencriptado;
});
