/* Para crear una promesa, necesitamos una funcion que retorne una promesa nueva, con dos estados resolve y reject.
*/
  console.log("Primer console log");
function waitNSeconds(miliseconds){
  console.log("Esperando respuesta"); 
   return new Promise((resolve, reject) =>{
    //inicializamos el time out
    setTimeout(() => {
//estado artificial para ver la salida resolve o reject//
const response = false;
if(response){
  resolve("La peticion fue exitosa");
} else{
  reject("La peticion fallo");
}
    }, miliseconds)
  })
}
waitNSeconds(5000).then((res) => { //respuesta callback//
console.log("Respuesta exitosa", res);
}) .catch((error) => { //consumir estado respuesta asincrona//
  console.log("Respuesta rechazada", error); //async await//
}) //.then(() => "hola").catch(() => "holaaa").then() //;
  console.log("Voy despues del llamado a la funcion waitNseconds");
    console.log("Voy despues del llamado a la funcion waitNseconds 2");
      console.log("Voy despues del llamado a la funcion waitNseconds 3");
        console.log("Voy despues del llamado a la funcion waitNseconds 4");
          console.log("Voy despues del llamado a la funcion waitNseconds 5");