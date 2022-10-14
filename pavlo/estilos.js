// ESTILOS GLOBALES:


//Colores.
let bgColor = "#1D1D25";
let colorTexto1 = "#F1F5D7";
let colorTexto2 = "#A4A491";
let colortitulo = "#D84341";

//Etiquetas
let h1 = document.getElementsByTagName("h1");
let label = document.getElementsByTagName("label");
let th = document.getElementsByTagName("th");
let td = document.getElementsByTagName("td");
let input = document.getElementsByTagName("input");
let form = document.getElementsByTagName("form");
let sectionImgS = document.getElementsByTagName("section");
let imgS = document.getElementsByTagName("img");

//Aplicación de estilos.
document.body.style.backgroundColor = bgColor;

for (let i = 0; i <= td.length; i++) { //uso el td, porque es el array más largo.

    if (i < h1.length) {
        h1[i].style.color = colortitulo;
        h1[i].style.fontFamily = "roboto";
    }
    
    if (i < label.length) {
        label[i].style.color = colorTexto1;
        label[i].style.fontFamily = "roboto";
    }

    if (i < th.length) {
        th[i].style.color = colorTexto2;
        th[i].style.fontFamily = "roboto";
        th[i].style.textAlign = "center";
        th[i].style.border = "solid";
        th[i].style.borderWidth = "1px";
        th[i].style.borderLeftWidth = "0px";
        th[i].style.borderRightWidth = "0px";
        th[i].style.borderBottomWidth = "0px";
        th[i].style.padding = "10px 10px 10px 10px";
    }

    if (i < td.length) {
        td[i].style.color = colorTexto1;
        td[i].style.fontFamily = "roboto";
        td[i].style.border = "solid";
        td[i].style.borderWidth = "1px";
        td[i].style.borderLeftWidth = "0px";
        td[i].style.borderRightWidth = "0px";
        td[i].style.padding = "10px 10px 10px 10px";
    }

    if (i < input.length) {
        input[i].style.margin = "5px 5px 5px 5px";
    }

    if (i < form.length) {
        form[i].style = "display: flex";
        form[i].style.flexDirection = "column";
    }

    if (i < sectionImgS.length) {
        sectionImgS[i].style.display = "flex";
    }

    if (i < img.length) {
        imgS[i].style.width = "300px";
        imgS[i].style.objectFit = "cover";
        imgS[1].style.margin = "0 0 0 20px"
    }

}

