/* Para crear una promesa, necesitamos una funcion que retorne una promesa nueva, con dos estados resolve y reject.
*/

function waitNSeconds(miliseconds){
  return new Promise((resolve, reject) =>{
    //inicializamos el time out
    setTimeout(() => {
//estado artificial para ver la salida resolve o reject//
const response = true;
if(response){
  resolve("La peticion fue exitosa");
} else{
  reject("La peticion fallo");
}
    }, miliseconds)
  })
}