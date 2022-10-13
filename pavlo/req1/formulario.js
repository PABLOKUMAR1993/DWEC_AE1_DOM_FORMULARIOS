// DIV:


//Creo un div para meter el formulario dentro de este.
let divForm = document.createElement("div");
div.appendChild(divForm);


// TITULO:


//Creo un título y su contenido.
let tituloForm = document.createElement("h1");
let txTituloFormulario = document.createTextNode("Formulario: ");
divForm.appendChild(tituloForm);
tituloForm.appendChild(txTituloFormulario);


// FORMULARIO - CREACIÓN:


//Creo el formulario.
let form = document.createElement("form");

//Creo las label para el formulario.
let labelDNI = document.createElement("label");
let labelNombre = document.createElement("label");
let labelApellidos = document.createElement("label");
let labelDireccion = document.createElement("label");
let labelTelefono = document.createElement("label");

//Creo los inputs para el formulario.
let inputDNI = document.createElement("input");
let inputNombre = document.createElement("input");
let inputApellidos = document.createElement("input");
let inputDireccion = document.createElement("input");
let inputTelefono = document.createElement("input");

//Creo los textos para las labels.
let txDNI = document.createTextNode("DNI: ");
let txNombre = document.createTextNode("Nombre: ");
let txApellidos = document.createTextNode("Apellidos: ");
let txDireccion = document.createTextNode("Dirección: ");
let txTelefono = document.createTextNode("Teléfono: ");

// Creo la jerarquiá DOM para el FORM.
divForm.appendChild(form);

form.appendChild(labelDNI);
form.appendChild(labelNombre);
form.appendChild(labelApellidos);
form.appendChild(labelDireccion);
form.appendChild(labelTelefono);

labelDNI.appendChild(txDNI);
labelNombre.appendChild(txNombre);
labelApellidos.appendChild(txApellidos);
labelDireccion.appendChild(txDireccion);
labelTelefono.appendChild(txTelefono);

labelDNI.appendChild(inputDNI);
labelNombre.appendChild(inputNombre);
labelApellidos.appendChild(inputApellidos);
labelDireccion.appendChild(inputDireccion);
labelTelefono.appendChild(inputTelefono);

inputDNI.value = "Escribe aquí tu DNI";
inputNombre.value = "Escribe aquí tu Nombre";
inputApellidos.value = "Escribe aquí tus Apellidos";
inputDireccion.value = "Escribe aquí tu Dirección";
inputTelefono.value = "Escribe aquí tu Teléfono";