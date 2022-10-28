// DIV:


//Creo un div para meter las imágenes dentro de este.
let divTextArea = document.createElement("div");
div.appendChild(divTextArea);


// TITULO:


//Creo un título y su contenido.
let tituloTextArea = document.createElement("h1");
let txTituloTextArea = document.createTextNode("Text Area:");
divTextArea.appendChild(tituloTextArea);
tituloTextArea.appendChild(txTituloTextArea);


// TEXT AREA:


//Creo la etiqueta Text Area y un Titulo para ella.
let textArea = document.createElement("textarea");
let h3 = document.createElement("h3");

//Creo el contenido del titulo.
let textH3 = document.createTextNode("Observaciones:");

//Creo la jeqrarquia DOM.
divTextArea.appendChild(h3);
h3.appendChild(textH3);
divTextArea.appendChild(textArea);
textArea.placeholder = "Escribe aquí las observaciones pertinentes.";