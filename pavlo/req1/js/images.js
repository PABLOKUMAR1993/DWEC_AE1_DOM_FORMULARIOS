// DIV:


//Creo un div para meter las imágenes dentro de este.
let divImages = document.createElement("div");
div.appendChild(divImages);
divImages.setAttribute("id", "imagenes");


// TITULO:


//Creo un título y su contenido.
let tituloImages = document.createElement("h1");
let txTituloImages = document.createTextNode("Imágenes: ");
divImages.appendChild(tituloImages);
tituloImages.appendChild(txTituloImages);


// IMÁGENES:

//
let sectionImg = document.createElement("section");
divImages.appendChild(sectionImg);

//Almaceno las imagenes en un array.
let imgUrl = [ 
    "https://t2.uc.ltmcdn.com/es/posts/9/2/0/cuales_son_los_cuidados_de_un_border_collie_52029_600_square.jpg",
    "https://b.rgbimg.com/users/m/ma/madidem/600/pd5LbTe.jpg" ];
let img = [];

for (let i=0; i<2; i++) {

    //Creo los elementos img.
    img[i] = document.createElement("img");

    //Les meto una foto.
    img[i].setAttribute("src", imgUrl[i]);

    //Le meto un alt para que no me regañe chrome.
    img[i].setAttribute("alt", "imagen de animalito")

    //Las meto en el div correspondiente.
    sectionImg.appendChild(img[i]);

}