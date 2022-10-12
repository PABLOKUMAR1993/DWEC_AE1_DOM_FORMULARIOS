// TITULO:

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

//Creo los 4 inputs radio.
let radio1 = document.createElement("input");
radio1.setAttribute("type", "radio");
radio1.value = "opcion1";
let radio2 = document.createElement("input");
radio2.setAttribute("type", "radio");
radio2.value = "opcion2";
let radio3 = document.createElement("input");
radio3.setAttribute("type", "radio");
radio3.value = "opcion3";
let radio4 = document.createElement("input");
radio4.setAttribute("type", "radio");
radio4.value = "opcion4";

//Creo 4 etiquetas label para identificar a los radios.
let opcion1 = document.createElement("label");
let opcion2 = document.createElement("label");
let opcion3 = document.createElement("label");
let opcion4 = document.createElement("label");

let txRadio1 = document.createTextNode(" Opción 1: ");
let txRadio2 = document.createTextNode(" Opción 2: ");
let txRadio3 = document.createTextNode(" Opción 3: ");
let txRadio4 = document.createTextNode(" Opción 4: ");

//Los adjunto usando DOM para mostrarlos.
divRadio.appendChild(opcion1);
divRadio.appendChild(opcion2);
divRadio.appendChild(opcion3);
divRadio.appendChild(opcion4);

opcion1.appendChild(txRadio1);
opcion2.appendChild(txRadio2);
opcion3.appendChild(txRadio3);
opcion4.appendChild(txRadio4);

opcion1.appendChild(radio1);
opcion2.appendChild(radio2);
opcion3.appendChild(radio3);
opcion4.appendChild(radio4);

//Estilos.
let fontColorRadio = "#F1F5D7";
let labelRadio = document.getElementsByTagName("label");

for (let i = 0; i < label.length; i++) {
    label[i].style.color = fontColor;
    label[i].style.marginLeft = "25px";
}