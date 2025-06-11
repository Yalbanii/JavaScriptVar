    /*EJERCICIO 1: 1 AL 100 PAR O IMPAR */
let i = 1;
for (i=1; i<=100; ++i) {
  if ((i % 2) == 0) {
    console.log(i);
    console.log ("El numero es par");
  } 
else {  console.log(i);
    console.log ("El numero es impar");
}
}

/*salto de linea en el prompt \n */

//EJERCICIO 2: WHILE DO WHILE. 
//function getRandomInt(min, max) {
 // min = Math.ceil(min);
 // max = Math.floor(max);
 //  return Math.floor(Math.random() * (max - min + 1)) + min;
//}
const numero = Number(prompt("Adivina el numero que estoy pensando")); 
//let random_number = getRandomInt(1, 100);
do {
    random_number = Math.floor(Math.random(1,100) + 5);
    console.log(random_number);
    if (numero == random_number){ 
console.log ("Numero correcto");
  alert( "El numero es correcto" );
  break;  
} else {
console.log ("El numero es incorrecto");
  alert("El numero es incorrecto" );
}
} while (false)