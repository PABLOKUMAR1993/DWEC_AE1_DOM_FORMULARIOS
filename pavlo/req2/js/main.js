window.onload = function() {
    //formulario.onsubmit = validacionInputsTexto;
    formulario.onsubmit = validarRadio;
}

function validacionInputsTexto() {
    
    let contador = 0;

    if (nombre.value.trim() == "") {
        contador++;
        nombreLabel.setAttribute("class", "labelError");
    }
    if (direccion.value.trim() == "") {
        contador++;
        direccionLabel.setAttribute("class", "labelError");
    }
    if (telefono.value.trim() == "") {
        contador++;
        telefonoLabel.setAttribute("class", "labelError");
    }
    if (email.value.trim() == "") {
        contador++;
        emailLabel.setAttribute("class", "labelError");
    }

    if (contador > 0) {
        let error = document.createElement("p");
        let errorTx = document.createTextNode("En tus datos no puedes dejar ningún campo vacio.");
        error.appendChild(errorTx);
        datosCliente.appendChild(error);
        error.setAttribute("class", "mensajeError");

        return false;
    }

    return true;

}

function validarRadio() {

    let tamanyo = document.getElementsByName("tamanyo");
    let seleccionado = false;
    
    for (let i=0; i<tamanyo.length; i++) {

        if (tamanyo[i].checked) {
            seleccionado = true;
            break;
        }

    }

    if (!seleccionado) {
        console.log("selecciona un radio")
        return false;
    }

}