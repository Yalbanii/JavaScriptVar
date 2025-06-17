const bodyHTML = document.getElementById("body");
console.log(bodyHTML);

//creando elemento
const root = document.createElement("html");
root.lang = "es";
console.log(root);
const head = document.createElement("head");
const title = document.createElement("title");
//creando un nodo de texto
const titleText = document.createTextNode("HTML con JS");
//agregando hijos a las etiquetas
title.appendChild(titleText);
head.appendChild(title);
root.appendChild(head);
console.log(root);
const body = document.createElement("body");
const h1 = document.createElement("h1");
const h1Text = document.createTextNode("Hola ch 55");
h1.appendChild(h1Text);
body.appendChild(h1);
root.appendChild(body);
bodyHTML.appendChild(root);
/*
1. crear un elemento p
2. crear un texto para el elemento p
3. agregar el texto al elemento p
4. agregar el elemento p al body
*/
const pElement = document.createElement("pElement");
const pText = document.createTextNode("Texto en el parrafo");
body.appendChild(pElement);
pElement.appendChild(pText);
/*body.appendChild(pText);
root.appendChild(body);
bodyHTML.appendChild(root);*/
console.log(root);

//MANIPULANDO ESTILOS
pElement.style.fontSize = "34px";
//img
const img2 = document.createElement("img");
body.appendChild(img2);
//dos parametros, primero nombre del atributo y segundo valor
img2.setAttribute("src", "erling-haaland-tijera.jpg");
img2.setAttribute("alt", "el mejor gol de Haaland");
img2.style.width = "200px";

const img3 = document.createElement("img");
body.appendChild(img3);
img3.setAttribute("src", "lady-gaga-brings-mayhem-to-mexico-14.jpg");
img3.setAttribute("alt", "mejor entrada de concierto");
img3.style.width = "300px";
img3.style.borderRadius = "50%";
img3.style.aspectRatio = 1;
img3.style.objectFit = "cover";

/*img.setAttribute("src","CafeterA_a-Alicia-en-el-PaA_s-de-las-maravillas.-Foto.-Joe-CA¡rcamo.jpg" );
img.setAttribute("alt", "mejor lugar para relajarse");
*/