// Cuando sea pulsado el botón se comprobará el formulario antes de ser enviado.
finalizarPedido.onclick = () => { formulario.onsubmit = validarTodo; };

// Variables para que sean accesobiles por todos los métodos.
let tipoPizza;
let cantidadIngredientes = 0;

function validarTodo() {

    // Sólo si los 3 return son ciertos, devuelvo true para que se envíe el form,
    // si no, es que algun método devuelve false, se muestra por pantalla el error.

    let confirmacion1 = validacionInputsTexto();
    let confirmacion2 = validarRadio();
    let confirmacion3 = validarCheckBox();

    if (confirmacion1 && confirmacion2 && confirmacion3) {
        // Si todo está relleno, llamo al método que calcula el precio.
        calcularTotal();
        return true;
    } else {
        return false;
    }
    
}

function validacionInputsTexto() {
    
    // Compruebo si algún input está vacio.
    // Si lo está, incremento la variable contador.
    // Seguidamente le añado una clase al label del input que está vacio, para señalizarlo con CSS.

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

    // Si contador es mayor que 0 esque algo está vacio y se lo indico al usuario,
    // mostrando un error en su pantalla.

    if (contador > 0) {
        let error = document.createElement("p");
        let errorTx = document.createTextNode("En tus datos no puedes dejar ningún campo vacio.");
        error.appendChild(errorTx);
        datosCliente.appendChild(error);
        error.setAttribute("class", "mensajeError");
        return false;
    } else {
        return true;
    }

}

function validarRadio() {

    // Compruebo si algún tamaño ha sido elegido y lo almaceno.

    let tamanyo = document.getElementsByName("tamanyo");
    let seleccionado = false;
    
    for (let i=0; i<tamanyo.length; i++) {
        if (tamanyo[i].checked) {
            seleccionado = true;
            // Si algun elemento ha sido elegido guardo su value.
            tipoPizza = tamanyo[i].value; 
            break;
        }
    }


    // Si la variable seleccionado sigue siendo false esque no ha elegido ninguno y
    // muestro un error en la web.

    if (!seleccionado) {
        let error = document.createElement("p");
        let errorTx = document.createTextNode("Es obligatorio que elijas un tamaño de Pizza.");
        error.appendChild(errorTx);
        tamanyoPizza.appendChild(error);
        error.setAttribute("class", "mensajeError");

        return false;
    } else {
        return true;
    }

}

function validarCheckBox() {

    // Compruebo si algún ingrediente ha sido marcado.

    let tipo = document.getElementsByName("ingrediente");
    let seleccionado = false;

    for (let i=0; i<tipo.length; i++) {
        if (tipo[i].checked) {
            seleccionado = true;
            break; // Con que haya uno seleccionado me vale.
        }
    }

    // Si algún ingrediente está checked sumara 1 al contador de ingredientes.

    for (let j=0; j<tipo.length; j++) {
        if (tipo[j].checked) {
            cantidadIngredientes++;
        }
    }

    // Si la variable seleccionado sigue siendo false esque no ha elegido ninguno y
    // muestro un error en la web.

    if (!seleccionado) {
        let error = document.createElement("p");
        let errorTx = document.createTextNode("Es obligatorio que elijas cómo mínimo un ingrediente para la Pizza.");
        error.appendChild(errorTx);
        ingredientesPizza.appendChild(error);
        error.setAttribute("class", "mensajeError");

        return false;
    } else {
        return true;
    }

}

function calcularTotal() {

    // Si ha llegado hasta aquí el programa, esque el formulario está entero relleno.
    // Compruebo que tamaño de pizza ha elegido.

    let total = 0;

    if (tipoPizza == "S") {
        total+=5;
    } else if (tipoPizza == "M") {
        total+=10;
    } else if (tipoPizza == "L") {
        total+=15;
    }

    // Al valor del tamaño de la pizza, le sumo la cantidad de ingredientes elegidos, 
    // pues 1 ingrediente = 1€.

    total = total + cantidadIngredientes;

    // Muestro con alertas el total el pedido, de otra forma no consigo hacerlo funcionar,
    // al enviar el formulario se me actualiza la página y me desaparecen los totales en una fracción de segundo.

    alert("Hemos recibido tu pedido correctamente." + "\n" + "El total del pedido es: " + total + "€.");

    /*   
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let h4Tx = document.createTextNode("Gracias!");
    let h5Tx = document.createTextNode("TOTAL DEL PEDIDO:.");
    let p1Tx = document.createTextNode("Hemos recibido tu pedido correctamente.");
    let p2Tx = document.createTextNode(`${total}`);
    h4.appendChild(h4Tx);
    h5.appendChild(h5Tx);
    p1.appendChild(p1Tx);
    p2.appendChild(p2Tx);
    pedidoTerminado.appendChild(h4);
    pedidoTerminado.appendChild(p1);
    pedidoTerminado.appendChild(h5);
    pedidoTerminado.appendChild(p2);
    */
    
}