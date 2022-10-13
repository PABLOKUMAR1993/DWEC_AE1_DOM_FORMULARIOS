// DIV:


//Creo un div para meter los round dentro de este.
let divRadio1 = document.createElement("div");
div.appendChild(divRadio1);


// TITULO:


//Creo un título y su contenido.
let tituloRadio1 = document.createElement("h1");
let txTituloRadio1 = document.createTextNode("Radio Inputs 1: ");
divRadio1.appendChild(tituloRadio1);
tituloRadio1.appendChild(txTituloRadio1);


// INPUTS RADIOS:


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

//Creo los textos para los inputs.
let opcion1 = document.createElement("label");
let opcion2 = document.createElement("label");
let opcion3 = document.createElement("label");
let opcion4 = document.createElement("label");

let txRadio1 = document.createTextNode(" Opción 1: ");
let txRadio2 = document.createTextNode(" Opción 2: ");
let txRadio3 = document.createTextNode(" Opción 3: ");
let txRadio4 = document.createTextNode(" Opción 4: ");

//Creo la jerarquia DOM.
divRadio1.appendChild(opcion1);
divRadio1.appendChild(opcion2);
divRadio1.appendChild(opcion3);
divRadio1.appendChild(opcion4);

opcion1.appendChild(txRadio1);
opcion2.appendChild(txRadio2);
opcion3.appendChild(txRadio3);
opcion4.appendChild(txRadio4);

opcion1.appendChild(radio1);
opcion2.appendChild(radio2);
opcion3.appendChild(radio3);
opcion4.appendChild(radio4);