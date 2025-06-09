//! FUNCIONES
// firma de la funcion
// funcion declaration. no importa si la llamamos antes de ser declarada. function declaration y variables var. 
// Si no es variable var no entra en josting??
 //*cuando se vean llaves {} se crea un ambito local o scope. Lo que esta dentro no existe fuera, a menos que se mande a llamar*//
 //Los scope no tienen visibilidad entre hermanos, solo hacia arriba, al padre
 // Para que sea global y publico se tienen que declarar fuera de las funciones/.

const sumaResult = suma(2,2);
console.log(sumaResult); //*undefined*//
function suma(a,b) {
    console.log(a + b)
}; //*se llama firma de la funcion. no retorna nada*//

//*a,b param*//
function resta(a,b) {
    return a - b;
}; //*retorna un valor*//  console.log(a + b)
let restaResult = (6,3);
 console.log({ restaResult });
 console.log(resta(4,2));

 //function expression or anonimous
 const multiplicacion = function (a, b) {
    return a * b;
 };

 const dividir = function (a, b) {
    console.log(a / b);
 }
 dividir (14,2);
 //*3,6 argument*//
 const multiResult = multiplicacion(3, 6);
 console.log(multiResult);