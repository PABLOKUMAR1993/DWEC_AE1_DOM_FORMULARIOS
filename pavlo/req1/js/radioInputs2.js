// DIV:


//Creo un div para meter los round dentro de este.
let divRadio2 = document.createElement("div");
div.appendChild(divRadio2);


// TITULO:


//Creo un título y su contenido.
let tituloRadio2 = document.createElement("h1");
let txTituloRadio2 = document.createTextNode("Radio Inputs 2 (con tablaRadio): ");
divRadio2.appendChild(tituloRadio2);
tituloRadio2.appendChild(txTituloRadio2);


// TABLA:


//Creo los elementos para la tablaRadio.
let tablaRadio2 = document.createElement("table");
divRadio2.appendChild(tablaRadio2);


//Creo los 8 textos que necesito.
let txThRadio2 = [];
let txTdRadio2 = [];
for (let i=0; i<4; i++) {
    txThRadio2[i] = document.createTextNode("TÍTULO " + (i+1) + ":");
    txTdRadio2[i] = document.createTextNode("Opción " + (i+1));
}

//Creo 2 filas de tabla.
let trRadio2 = [];
for (let i=0; i<2; i++) {
    trRadio2[i] = document.createElement("tr");
    tablaRadio2.appendChild(trRadio2[i]);
}

//Creo 4 cabeceras de tabla y las meto en la primera fila.
let thRadio2 = [];
for (let i=0; i<4; i++) {
    thRadio2[i] = document.createElement("th");
    trRadio2[0].appendChild(thRadio2[i]);
    thRadio2[i].appendChild(txThRadio2[i]);
}

//Creo 5 bloques de tabla y las meto en la segunda fila.
let tdRadio2 = [];
for (let i=0; i<4; i++) {
    tdRadio2[i] = document.createElement("td");
    trRadio2[1].appendChild(tdRadio2[i]);
}

//Creo 4 inputs tipo checkbox y los meto en los td.
let inputRadio2 = [];
for (let i=0; i<4; i++) {
    inputRadio2[i] = document.createElement("input");
    inputRadio2[i].setAttribute("type", "radio");
    tdRadio2[i].appendChild(inputRadio2[i]);
    tdRadio2[i].appendChild(txTdRadio2[i]);
}