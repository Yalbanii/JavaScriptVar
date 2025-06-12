// ARRAYS
const names = ["Josue", "Mar", "Maara", "Marcos", "Karim", "Carlos"];
console.log(names[2]);
console.log(names[4]);
console.log(names.length); //tamaño del array = cantidad de elementos en el array
//obtener el ultimo elemento de un array
console.log(names[names.length - 1]);// le recorremos 1 para obtener el valor del array
//como recorrer arrays
console.log("Recorrido con for"); 
for (let i=0; i<names.length; i++){
    console.log(names[i]);
}
//foreach callback son funciones que se pasan como argumento a otra funcion
//recorre cada elemento del array
//names.forEach(function (elemento)){
//console.log(elemento)
//}
console.log("Recorrido con foreach usando arrow function");

//names.forEach((elemento) => console.log(elemento));
//names.forEach(name) => { /*AQUI HAY PROBLEMO*/
 //   const upperCaseName = name.toLocalUpperCase ();
  //  console.log(upperCaseName);
//}
//agregar y eliminar elementos. La pila el ultimo en entrar es el primero en salir. El pop elimina y regresa el ultimo elemento del array
//el push agrega un elemento al final del array, hacen que el array se comporte como un stack o pila LIFO LAST IN FIRST FIRST OUT

const lastElement = names.pop();
console.log(lastElement);
console.log(names);
names.push("Ricardo"); //push retorna el nuevo length del array
console.log(names);
//unshift y shift
//estos metodos permiten que nuestro array actue como una cola 
// queu
//fifo
//first in
//first out
const firstElement = names.shift();
console.log(firstElement);
names.unshift("Sarai");
console.log(names);

//map, filter, reduce
// tienen la particularidad que retornan un array nuevo
const upperCaseNames = names.map((name) => name.toLocaleUpperCase());
console.log(names);
console.log(upperCaseNames);

const numbers = [2,3,4,5,6,7,8,9];
const numbersTimesFour = numbers.map((number) => number * 4);
console.log(numbers);
console.log(numbersTimesFour);
//(valor del elemento actual, indice del elemento, el array sobre el que trabajamos)
//