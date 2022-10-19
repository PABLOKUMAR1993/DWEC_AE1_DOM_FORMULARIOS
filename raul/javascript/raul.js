
//  **************** TITULO ****************
let h1 = document.createElement("h1"); //Se crea variable h1 y se asiga etiqueta h1
let txTituloFormulario = document.createTextNode("Formulario Requerimiento 1");
div.appendChild(h1); //Se añade h1 al div para el titulo
h1.appendChild(txTituloFormulario);//Se añade el texto al título 

// **************** FORMULARIO ****************
let form = document.createElement("form");
div.appendChild(form); //Se crea formulario

let fieldset = document.createElement("fieldset");
let legend = document.createElement("legend");
let txLegend = document.createTextNode("Formulario");
form.appendChild(fieldset); //Se crea el fieldset1.
fieldset.appendChild(legend);//Se crea el legend1 para los datos personales.
legend.appendChild(txLegend);//Se asigna el texto de Datos personales.

// ---------------- FIELDSET1 para datos personales ----------------
let fieldset1 = document.createElement("fieldset");
let legend1 = document.createElement("legend");
let txLegend1 = document.createTextNode("Datos perdsonales");
fieldset.appendChild(fieldset1); //Se crea el fieldset1 dentro de fieldset.
fieldset1.appendChild(legend1);//Se crea el legend1 para los datos personales.
legend1.appendChild(txLegend1);//Se asigna el texto de Datos personales.

// DNI
let labelDNI = document.createElement("label"); // Se crea variable y se asigna etiqueta label
let inputDNI = document.createElement("input"); // Se crea variable y se asigna etiqueta input
let txDNI = document.createTextNode("DNI: "); //Se crea variable y se asigna el texto DNI
fieldset1.appendChild(labelDNI); //Se añade label para DNI al formulario 
labelDNI.appendChild(txDNI); //Se añade el texto para DNI al formulario
labelDNI.appendChild(inputDNI); //Se añade el input para DNI al formulario
inputDNI.placeholder = "Escribe tu DNI"; //Se añade el placeholder para DNI al formulario

// Nombre
let labelNombre = document.createElement("label");
let inputNombre = document.createElement("input");
let txNombre = document.createTextNode("Nombre: ");
fieldset1.appendChild(labelNombre);
labelNombre.appendChild(txNombre);
labelNombre.appendChild(inputNombre);
inputNombre.placeholder = "Escribe tu Nombre";

// Apellidos
let labelApellidos = document.createElement("label");
let inputApellidos = document.createElement("input");
let txApellidos = document.createTextNode("Apellidos: ");
fieldset1.appendChild(labelApellidos);
labelApellidos.appendChild(txApellidos);
labelApellidos.appendChild(inputApellidos);
inputApellidos.placeholder = "Escribe tus Apellidos";

// Dirección
let labelDireccion = document.createElement("label");
let inputDireccion = document.createElement("input");
let txDireccion = document.createTextNode("Direccion: ");
fieldset1.appendChild(labelDireccion);
labelDireccion.appendChild(txDireccion);
labelDireccion.appendChild(inputDireccion);
inputDireccion.placeholder = "Escribe tu Dirección";

// Teléfono
let labelTelefono = document.createElement("label");
let inputTelefono = document.createElement("input");
let txTelefono = document.createTextNode("Telefono: ");
fieldset1.appendChild(labelTelefono);
labelTelefono.appendChild(txTelefono);
labelTelefono.appendChild(inputTelefono);
inputTelefono.placeholder = "Escribe tu Teléfono";

// Se crea array de label
let label = document.getElementsByTagName("label");

// Se recorre el array de label y se asigna un margen izquierdo de 25px
for (let i = 0; i < label.length; i++) {
    label[i].style.marginLeft = "25px";
};

// ---------------- FIELDSET2 para Radio1 ----------------
let fieldset2 = document.createElement("fieldset");
let legend2 = document.createElement("legend");
let txLegend2 = document.createTextNode("Radio1");
fieldset.appendChild(fieldset2);
fieldset2.appendChild(legend2);
legend2.appendChild(txLegend2);

// **************** Radio ****************************

// Radio1
let radio1 = document.createElement("input");
radio1.setAttribute("type", "radio");
let opcion1 = document.createElement("label");
fieldset2.appendChild(opcion1);
let txRadio1 = document.createTextNode("Opción 1");
opcion1.appendChild(txRadio1);
opcion1.appendChild(radio1);

// Radio2
let radio2 = document.createElement("input");
radio2.setAttribute("type", "radio");
let opcion2 = document.createElement("label");
fieldset2.appendChild(opcion2);
let txRadio2 = document.createTextNode("Opción 2");
opcion2.appendChild(txRadio2);
opcion2.appendChild(radio2);

// Radio3
let radio3 = document.createElement("input");
radio3.setAttribute("type", "radio");
let opcion3 = document.createElement("label");
fieldset2.appendChild(opcion3);
let txRadio3 = document.createTextNode("Opción 3");
opcion3.appendChild(txRadio3);
opcion3.appendChild(radio3);

// Radio4
let radio4 = document.createElement("input");
radio4.setAttribute("type", "radio");
let opcion4 = document.createElement("label");
fieldset2.appendChild(opcion4);
let txRadio4 = document.createTextNode("Opción 4");
opcion4.appendChild(txRadio4);
opcion4.appendChild(radio4);

// ---------------- FIELDSET3 para Radio2 ----------------
let fieldset3 = document.createElement("fieldset");
let legend3 = document.createElement("legend");
let txLegend3 = document.createTextNode("Radio2");
fieldset.appendChild(fieldset3);
fieldset3.appendChild(legend3);
legend3.appendChild(txLegend3);

// Color1
let inputColor1 = document.createElement("input");
inputColor1.setAttribute("type", "radio");
inputColor1.value = "1";
let labelAzul = document.createElement("label");
fieldset3.appendChild(labelAzul);
let txAzul = document.createTextNode("Azul");
labelAzul.appendChild(txAzul);
labelAzul.appendChild(inputColor1);

// Color2
let inputColor2 = document.createElement("input");
inputColor2.setAttribute("type", "radio");
inputColor1.value = "2";
let labelNaranja = document.createElement("label");
fieldset3.appendChild(labelNaranja);
let txNaranja = document.createTextNode("Naranja");
labelNaranja.appendChild(txNaranja);
labelNaranja.appendChild(inputColor2);

// Color3
let inputColor3 = document.createElement("input");
inputColor3.setAttribute("type", "radio");
inputColor1.value = "3";
let labelVerde = document.createElement("label");
fieldset3.appendChild(labelVerde);
let txVerde = document.createTextNode("Verde");
labelVerde.appendChild(txVerde);
labelVerde.appendChild(inputColor3);

// Color4
let inputColor4 = document.createElement("input");
inputColor4.setAttribute("type", "radio");
inputColor1.value = "1";
let labelMarron = document.createElement("label");
fieldset3.appendChild(labelMarron);
let txMarron = document.createTextNode("Marrón");
labelMarron.appendChild(txMarron);
labelMarron.appendChild(inputColor4);

// ---------------- FIELDSET4 para Checkbox1 ----------------
let fieldset4 = document.createElement("fieldset");
let legend4 = document.createElement("legend");
let txLegend4 = document.createTextNode("Checkbox1");
fieldset.appendChild(fieldset4);
fieldset4.appendChild(legend4);
legend4.appendChild(txLegend4);

/********* Checkbox1 **********/
//Opción1
let input1 = document.createElement("input");
input1.setAttribute("type", "checkbox");
let labelInput1 = document.createElement("label");
fieldset4.appendChild(labelInput1);
let txOpcion1 = document.createTextNode("Opción 1");
labelInput1.appendChild(txOpcion1);
labelInput1.appendChild(input1);

//Opción2
let input2 = document.createElement("input");
input2.setAttribute("type", "checkbox");
let labelInput2 = document.createElement("label");
fieldset4.appendChild(labelInput2);
let txOpcion2 = document.createTextNode("Opción 2");
labelInput2.appendChild(txOpcion2);
labelInput2.appendChild(input2);

//Opción3
let input3 = document.createElement("input");
input3.setAttribute("type", "checkbox");
let labelInput3 = document.createElement("label");
fieldset4.appendChild(labelInput3);
let txOpcion3 = document.createTextNode("Opción 3");
labelInput3.appendChild(txOpcion3);
labelInput3.appendChild(input3);

//Opción4
let input4 = document.createElement("input");
input4.setAttribute("type", "checkbox");
let labelInput4 = document.createElement("label");
fieldset4.appendChild(labelInput4);
let txOpcion4 = document.createTextNode("Opción 4");
labelInput4.appendChild(txOpcion4);
labelInput4.appendChild(input4);

//Opción5
let input5 = document.createElement("input");
input5.setAttribute("type", "checkbox");
let labelInput5 = document.createElement("label");
fieldset4.appendChild(labelInput5);
let txOpcion5 = document.createTextNode("Opción 5");
labelInput5.appendChild(txOpcion5);
labelInput5.appendChild(input5);

// ---------------- FIELDSET5 para imagenes ----------------
let fieldset5 = document.createElement("fieldset");
let legend5 = document.createElement("legend");
let txLegend5 = document.createTextNode("Imágenes");
fieldset.appendChild(fieldset5);
fieldset5.appendChild(legend5);
legend5.appendChild(txLegend5);

/********* Imágenes **********/

//Imagen 1
let imagen1 = document.createElement("img");
fieldset5.appendChild(imagen1);
imagen1.setAttribute("src", "imagenes/Picasso.png");
imagen1.height = 200;

//Imagen 2
let imagen2 = document.createElement("img");
fieldset5.appendChild(imagen2);
imagen2.src = 'imagenes/Picasso2.jpg';
imagen2.height = 200;

// ---------------- FIELDSET6 para Campo select ----------------
let fieldset6 = document.createElement("fieldset");
let legend6 = document.createElement("legend");
let txLegend6 = document.createTextNode("Campo select");
fieldset.appendChild(fieldset6);
fieldset6.appendChild(legend6);
legend6.appendChild(txLegend6);

/********* Campo select **********/
let select = document.createElement("select");
fieldset6.appendChild(select);

let option1 = document.createElement("option");
option1.setAttribute("value", "value1");
let txOption1 = document.createTextNode("Español");
option1.appendChild(txOption1);

let option2 = document.createElement("option");
option2.setAttribute("value", "value2");
let txOption2 = document.createTextNode("Inglés");
option2.appendChild(txOption2);

let option3 = document.createElement("option");
option3.setAttribute("value", "value3");
let txOption3 = document.createTextNode("Francés");
option3.appendChild(txOption3);

let option4 = document.createElement("option");
option3.setAttribute("value", "value3");
let txOption4 = document.createTextNode("Alemán");
option4.appendChild(txOption4);

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);

// ---------------- FIELDSET7 para Textarea ----------------
let fieldset7 = document.createElement("fieldset");
let legend7 = document.createElement("legend"); 
let txLegend7 = document.createTextNode("Textarea"); 
fieldset.appendChild(fieldset7); 
fieldset7.appendChild(legend7); 
legend7.appendChild(txLegend7); 

/********* Text area **********/
let textarea = document.createElement("textarea");
fieldset7.appendChild(textarea);
textarea.placeholder="Escribe aquí el texto";




