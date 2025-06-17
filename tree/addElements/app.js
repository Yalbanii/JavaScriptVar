const container = document.querySelector("main");
const btnAdd = document.querySelector("#btn-add");
const btnClear= document.querySelector("#btn-clear");
const h2El = document.createElement("h2");
const h2Text = document.createTextNode("HOLA!");
h2El.appendChild(h2Text);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
} //cuantas veces has hecho click//
btnAdd.addEventListener("click", () =>  {
const card = 
`<div class="card" data-id="${getRndInteger(1,100)}" style="width: 18rem;">
  <img src="CafeterA_a-Alicia-en-el-PaA_s-de-las-maravillas.-Foto.-Joe-CA¡rcamo.jpg" class="card-img-top" alt="Lugar feliz">
  <div class="card-body">
    <h5 class="card-title">Card title ${getRndInteger(1,100)}</h5>
    <p class="card-text">Un lugar tranquilo</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
;

//innerHTML seleccionar el contenedor//
container.innerHTML += card; //solo aparece 1 card, funciona como reasignacion de variable HTML. ENTONCES USAR += O SE BORRA TODO//
/*insertAdjacentHTML
Nos permite poner el contenedor en la posicion que queramos
beforeend
afterend
beforebegin
afterbegin


//ESTE PUEDE TRANSFORMAR UN TEXTO A ETIQUETA//
container.insertAdjacentHTML("afterbegin", card);

/*ESTE PUEDE AGREGAR UN ELEMENTO HTML COMO H2
*/
container.insertAdjacentElement("afterbegin", h2El); //SOLO admite en segundo un elemento html ESTA SOBREESCRIBIENDO EL TEXTO QUE YA HABIA//
});

btnClear.addEventListener("click", () => container.innerHTML = "");