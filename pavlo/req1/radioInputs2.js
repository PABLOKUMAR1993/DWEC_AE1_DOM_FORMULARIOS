// DIV:


//Creo un div para meter los round dentro de este.
let divRadio2 = document.createElement("div");
div.appendChild(divRadio2);


// TITULO:


//Creo un título y su contenido.
let tituloRadio2 = document.createElement("h1");
let txTituloRadio2 = document.createTextNode("Radio Inputs 2 (con tabla): ");
divRadio2.appendChild(tituloRadio2);
tituloRadio2.appendChild(txTituloRadio2);


// TABLA:


//Creo los elementos para la tabla.
let tabla = document.createElement("table");
divRadio2.appendChild(tabla);

//2 filas.
let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");

//4 casillas de título.
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");

//4 casillas de contenido normal.
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");

//Creo los textos que va a contener la tabla.
let txTh1 = document.createTextNode("TÍTULO 1:")
let txTh2 = document.createTextNode("TÍTULO 2:")
let txTh3 = document.createTextNode("TÍTULO 3:")
let txTh4 = document.createTextNode("TÍTULO 4:")
let tx1 = document.createTextNode(" Opción 1 ");
let tx2 = document.createTextNode(" Opción 2 ");
let tx3 = document.createTextNode(" Opción 3 ");
let tx4 = document.createTextNode(" Opción 4 ");

//Creo los inputs radio.
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let input4 = document.createElement("input");

/* let input = [];
for (let i = 0; i < 4; i++) {
    input[i] = document.createElement("input");
} */

input1.setAttribute("type", "radio");
input2.setAttribute("type", "radio");
input3.setAttribute("type", "radio");
input4.setAttribute("type", "radio");

/* input[0].setAttribute("type", "radio");
input[1].setAttribute("type", "radio");
input[2].setAttribute("type", "radio");
input[3].setAttribute("type", "radio"); */

//Ahora hago todas las herencias jerarquicas de DOM.
tabla.appendChild(tr1);
tabla.appendChild(tr2);

//Fila 1.
tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
tr1.appendChild(th4);
th1.appendChild(txTh1);
th2.appendChild(txTh2);
th3.appendChild(txTh3);
th4.appendChild(txTh4);

//Fila 2.
tr2.appendChild(td1);
tr2.appendChild(td2);
tr2.appendChild(td3);
tr2.appendChild(td4);
td1.appendChild(tx1);
td2.appendChild(tx2);
td3.appendChild(tx3);
td4.appendChild(tx4);
td1.appendChild(input1);
td2.appendChild(input2);
td3.appendChild(input3);
td4.appendChild(input4);