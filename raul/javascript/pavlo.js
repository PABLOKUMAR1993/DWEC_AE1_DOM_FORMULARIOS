let bgColor = "#1D1D25";
let fontColor = "#F1F9";
let titleColor = "#D84341";

document.body.style.backgroundColor = bgColor;

let h1 = document.createElement("h1");
let txTituloFormulario = document.createTextNode("Formulario Requerimiento 1: ");

h1.style.color = fontColor;

let form = document.createElement("form");

let labelDNI = document.createElement("label");
let labelNombre = document.createElement("label");
let labelApellidos = document.createElement("label");
let labelDireccion = document.createElement("label");
let labelTelefono = document.createElement("label");

let labelRadio = document.createElement("label");

let inputDNI = document.createElement("input");
let inputNombre = document.createElement("input");
let inputApellidos = document.createElement("input");
let inputDireccion = document.createElement("input");
let inputTelefono = document.createElement("input");

let inputRadio = document.createElement("input");

let txDNI = document.createTextNode("DNI: ");
let txNombre = document.createTextNode("Nombre: ");
let txApellidos = document.createTextNode("Apellidos: ");
let txDireccion = document.createTextNode("Direccion: ");
let txTelefono = document.createTextNode("Telefono: ");

let txRadio = document.createTextNode("Radio: ");

div1.appendChild(h1);
h1.appendChild(txTituloFormulario);

div1.appendChild(form);

form.appendChild(labelDNI);
form.appendChild(labelNombre);
form.appendChild(labelApellidos);
form.appendChild(labelDireccion);
form.appendChild(labelTelefono);

form.appendChild(labelRadio);

labelDNI.appendChild(txDNI);
labelNombre.appendChild(txNombre);
labelApellidos.appendChild(txApellidos);
labelDireccion.appendChild(txDireccion);
labelTelefono.appendChild(txTelefono);

labelRadio.appendChild(txRadio);

labelDNI.appendChild(inputDNI);
labelNombre.appendChild(inputNombre);
labelApellidos.appendChild(inputApellidos);
labelDireccion.appendChild(inputDireccion);
labelTelefono.appendChild(inputTelefono);

labelRadio.appendChild(inputRadio);

inputDNI.placeholder = "Escribe tu DNI";
inputNombre.placeholder = "Escribe tu Nombre";
inputApellidos.placeholder = "Escribe tus Apellidos";
inputDireccion.placeholder = "Escribe tu Dirección";
inputTelefono.placeholder = "Escribe tu Teléfono";

inputRadio.type = "radio";
inputRadio.name = "Rojo";

let label = document.getElementsByTagName("label");

for (let i = 0; i < label.length; i++) {
    label[i].style.color = fontColor;
};

form.style = "display: flex";
form.style.flexDirection = "column";

for (let i = 0; i < label.length; i++) {
    label[i].style.marginTop = "25px";
};

//Creo un h1, su color y su texto.
let titleColorRadio1 = "#D84341";
let tituloRadio1 = document.createElement("h1");
let txTituloRadio1 = document.createTextNode("Radio Inputs 1: ");

//Lo adjunto usando DOM para mostrarlos.
div.appendChild(tituloRadio1);
tituloRadio1.appendChild(txTituloRadio1);

//Le añado el color.
tituloRadio1.style.color = titleColorRadio1;


// INPUTS RADIOS:


//Creo un div nuevo.
let divRadio = document.createElement("div");
document.body.appendChild(divRadio);

