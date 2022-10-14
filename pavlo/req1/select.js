// DIV:


//Creo un div para meter las imágenes dentro de este.
let divSelect = document.createElement("div");
div.appendChild(divSelect);


// TITULO:


//Creo un título y su contenido.
let tituloSelect = document.createElement("h1");
let txTituloSelect = document.createTextNode("Select: ");
divSelect.appendChild(tituloSelect);
tituloSelect.appendChild(txTituloSelect);


// SELECT:


let select = document.createElement("select");
select.add("opcion1");
divSelect.appendChild(select);