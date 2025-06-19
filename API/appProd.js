/*PERMITE HACER PETICIONES PERO NO MODIFICA EL API
*PETICIONES HTTP
1.Get para obtener info
2.Post para enviar info
3. Delete para borrar algo
4. Patch o put para actualizar info
*/

const BASE_URL = "https://fakestoreapi.com/products";
const mainContainer = document.querySelector(".container-jo");
const newProduct ={
  title: "gorra",
  price: 10.0,
  description: "gorra lisa",
  category: "ropa",
  image: "data:image/webp;base64,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",
}



//console.log(mainContainer);//

//FUNCTION DECLARATION ASYNC//
async function getAllProducts() { //NO HAY NADA DE PARAMETRO ()//
  try{
const response = await fetch (BASE_URL);
//console.log(response);//
const data = await response.json();
data.map((product) => renderProduct(product)); //APLICA UNA OPERACION A TOOS LOS ELEMENTOS DEL ARRAY//
//console.log(data);//
//return data;//
  }catch (error) {
console.log("Error", error);
  }
}
//LLAMAR FUNCION PARA LLAMAR TODOS LOS PRODUCTOS//
const getSingleProduct = async function (id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    //console.log(data);//
    return data;
  } catch(error) {
   console.log("Error", error);   
  } 
}

//delete product//
const deleteProduct = async function (id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`,{
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    console.log("Delete", data)
  } catch(error) {
   console.log("Error", error);   
  } 
}

//arrow function async//
const addProduct = async (productPromise) => {
  const response = await fetch (BASE_URL,{
    method: "POST",
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(productPromise)
  }); //SE PASA METODO E INFO DEL PRODUCTO COMO TEXTO PLANO, TAMBIEN HEADER COMO OPCION AL SERVIDOR//
  const data = await response.json();
  //console.log(data);//
  return data;
}

//metodo patch//
const updateProduct = async (id, productPromise) => {
  const response = await fetch(`${BASE_URL}/${id}`,{
     method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(productPromise)
  });
  const data = await response.json();
  //console.log(data);//
  return data;
}
//todas las funciones async retornan promesa. primero se captura promesa, sacar valor y trabajar sobre ello//
const renderProduct = async (productPromise) => {
  //console.log(productPromise);//
const data = await productPromise;  
  const cardProduct = `
<div class="card" style="width: 18rem">
  <img src="${data.image}" class="card-img-top" alt="${data.description}">
  <div class="card-body"> 
  <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.description}</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Price: $${data.price}</li>
    <li class="list-group-item"> Categoria: ${data.category}</li>
      <li class="list-group-item"> Rating: ${data.rating.rate}</li>
      </ul>
</div>
`;

mainContainer.insertAdjacentHTML("afterbegin", cardProduct);
}

/*const productUpdate = { title: 'Updated Product', price: 9.99 };
fetch('BASE_URL', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(productUpdate)
})
  .then(response => response.json())
  .then(data => console.log(data));
console.log(updateProduct);
console.log(productUpdate);
} 
updateProduct(newProduct);
*/

getAllProducts();
getSingleProduct(4);
addProduct(newProduct);
updateProduct(5, {price:100});
renderProduct(getSingleProduct(1));
renderProduct(getSingleProduct(2));
renderProduct(getSingleProduct(3));
deleteProduct(6);
