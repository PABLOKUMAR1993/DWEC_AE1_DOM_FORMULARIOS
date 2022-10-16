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
let option = [];
let txSelect = [];

for (let i=0; i<4; i++) {
    
    //Creo 4 options.
    option[i] = document.createElement("option");

    //Creo un texto para cada option.
    txSelect[i] = document.createTextNode("Opción " + (i+1));

    //Añado los option al select.
    select.appendChild(option[i]);

    //Añado a cada option su texto.
    option[i].appendChild(txSelect[i]);

    //Finalmente le añado un value a cada option (opcional en este caso).
    option[i].vale = txSelect[i];
}

//Le añado un titulo al select para que no me regañe el inspector.
select.title = "select";

//Hago select hijo del div.
divSelect.appendChild(select);