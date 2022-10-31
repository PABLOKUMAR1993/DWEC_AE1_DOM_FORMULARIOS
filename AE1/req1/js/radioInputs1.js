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


//Creo 4 inputs radio.
let txRadio = [];
let radio1 = [];
let labelRadio = [];

for (let i=0; i<4; i++) {
    
    //Creo los textos para indicar un nombre en cada radio.
    txRadio[i] = document.createTextNode(" Opción " + (i+1) + ": ");

    //Creo los radios:
    radio1[i] = document.createElement("input");
    radio1[i].setAttribute("type", "radio");
    radio1[i].value = "opcion "+i;

    //Creo los labels
    labelRadio[i] = document.createElement("label");

    //Creo la jerarquía DOM.
    divRadio1.appendChild(labelRadio[i]);
    labelRadio[i].appendChild(txRadio[i]);
    labelRadio[i].appendChild(radio1[i]);

}