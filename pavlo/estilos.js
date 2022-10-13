// ESTILOS GLOBALES:


//Fondo de pantalla.
let bgColor = "#1D1D25";
document.body.style.backgroundColor = bgColor;

let colorTexto1 = "#F1F5D7";
let colorTexto2 = "#A4A491";
let colortitulo = "#D84341";
let h1 = document.getElementsByTagName("h1");
let label = document.getElementsByTagName("label");
let th = document.getElementsByTagName("th");
let td = document.getElementsByTagName("td");

// NO FUNSIONA

/* for (let i = 0; i < td.length; i++) {

    if (h1[i] != "undefined") {
        h1[i].style.color = colortitulo;
        h1[i].style.fontFamily = "roboto";
    }

} */

for (let i = 0; i < h1.length; i++) {
    h1[i].style.color = colortitulo;
    h1[i].style.fontFamily = "roboto";
}

for (let i = 0; i < label.length; i++) {
    label[i].style.color = colorTexto1;
    label[i].style.fontFamily = "roboto";
}

for (let i = 0; i < th.length; i++) {
    th[i].style.color = colorTexto2;
    th[i].style.fontFamily = "roboto";
}

for (let i = 0; i < td.length; i++) {
    td[i].style.color = colorTexto1;
    td[i].style.fontFamily = "roboto";
}