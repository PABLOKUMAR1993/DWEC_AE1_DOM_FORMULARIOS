// TITULO:


let titleColorForm = "#D84341";
let tituloForm = document.createElement("h1");
let txTituloFormulario = document.createTextNode("Formulario: ");

div.appendChild(tituloForm);
tituloForm.appendChild(txTituloFormulario);

tituloForm.style.color = titleColorForm;


// FORMULARIO - CREACIÓN:


// Formulario:
let form = document.createElement("form");

// Formulario - Labels
let labelDNI = document.createElement("label");
let labelNombre = document.createElement("label");
let labelApellidos = document.createElement("label");
let labelDireccion = document.createElement("label");
let labelTelefono = document.createElement("label");

// Formulario - Inputs:
let inputDNI = document.createElement("input");
let inputNombre = document.createElement("input");
let inputApellidos = document.createElement("input");
let inputDireccion = document.createElement("input");
let inputTelefono = document.createElement("input");

// Formulario - Textos:
let txDNI = document.createTextNode("DNI: ");
let txNombre = document.createTextNode("Nombre: ");
let txApellidos = document.createTextNode("Apellidos: ");
let txDireccion = document.createTextNode("Dirección: ");
let txTelefono = document.createTextNode("Teléfono: ");


// FORMULARIO - INSERCIÓN:


// Formulario:
div.appendChild(form);

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


// ESTILOS:


let fontColor = "#F1F5D7";

form.style = "display: flex;";
form.style.flexDirection = "column";

let label = document.getElementsByTagName("label");

for (let i = 0; i < label.length; i++) {
    label[i].style.color = fontColor;
    label[i].style.marginTop = "25px";
}