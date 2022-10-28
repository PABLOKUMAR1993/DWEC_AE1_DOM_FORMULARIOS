// DIV:


//Creo un div para meter el formulario dentro de este.
let divForm = document.createElement("div");
div.appendChild(divForm);


// TITULO:


//Creo un título y su contenido.
let tituloForm = document.createElement("h1");
let txTituloFormulario = document.createTextNode("Formulario: ");
divForm.appendChild(tituloForm);
tituloForm.appendChild(txTituloFormulario);


// FORMULARIO - CREACIÓN:


//Creo el formulario.
let form1 = document.createElement("form");
divForm.appendChild(form1);

//Creo las variables.
let labelForm = [];
let inputForm = [];
let txForm1 = ["DNI: ", "Nombre: ", "Apellidos: ", "Dirección: ", "Teléfono: "];
let txForm2 = [];
let txInput1 = [
    "Escribe aquí tu DNI",
    "Escribe aquí tu Nombre",
    "Escribe aquí tus Apellidos",
    "Escribe aquí tu Dirección",
    "Escribe aquí tu Teléfono" ];
let txInput2 = [];

for (let i=0; i<5; i++) {

    //Creo las label para el formulario.
    labelForm[i] = document.createElement("label");

    //Creo los inputs para el formulario.
    inputForm[i] = document.createElement("input");

    //Creo los textos para las labels.
    txForm2[i] = document.createTextNode(txForm1[i]);

    //Creo los textos de los inputs.
    inputForm[i].placeholder = txInput1[i];

    // Creo la jerarquiá DOM para el FORM.
    form1.appendChild(labelForm[i]);
    labelForm[i].appendChild(txForm2[i]);
    labelForm[i].appendChild(inputForm[i]);
    
}