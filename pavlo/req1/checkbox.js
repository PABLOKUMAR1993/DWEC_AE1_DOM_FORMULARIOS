// DIV:


//Creo un div para meter los check box dentro.
let divCheck = document.createElement("div");
div.appendChild(divCheck);


// TITULO:


//Creo un título y su contenido.
let tituloCheck = document.createElement("h1");
let tituloCheckTx = document.createTextNode("CheckBox (con tabla):");
divCheck.appendChild(tituloCheck);
tituloCheck.appendChild(tituloCheckTx);


// TABLA:


//Creo los elementos para la tabla.
let tablaCheck = document.createElement("table");
divCheck.appendChild(tablaCheck);

//Creo los 8 textos que neceisto.
let txThCheck = [];
let txTdCheck = [];
for (let i=0; i<4; i++) {
    txThCheck[i] = document.createTextNode("TÍTULO " + (i+1) + ":");
    txTdCheck[i] = document.createTextNode("Opción " + (i+1));
}

//Creo 2 filas de tabla.
let trCheck = [];
for (let i=0; i<2; i++) {
    trCheck[i] = document.createElement("tr");
    tablaCheck.appendChild(trCheck[i]);
}

//Creo 4 cabeceras de tabla y las meto en la primera fila.
let thCheck = [];
for (let i=0; i<4; i++) {
    thCheck[i] = document.createElement("th");
    trCheck[0].appendChild(thCheck[i]);
    thCheck[i].appendChild(txThCheck[i]);
}

//Creo 4 bloques de tabla y las meto en la segunda fila.
let tdCheck = [];
for (let i=0; i<4; i++) {
    tdCheck[i] = document.createElement("td");
    trCheck[1].appendChild(tdCheck[i]);
}

//Creo 4 inputs tipo checkbox y los meto en los td.
let inputCheck = [];
for (let i=0; i<4; i++) {
    inputCheck[i] = document.createElement("input");
    inputCheck[i].setAttribute("type", "checkbox");
    tdCheck[i].appendChild(inputCheck[i]);
    tdCheck[i].appendChild(txTdCheck[i]);
}