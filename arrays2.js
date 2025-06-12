//filter, reduce filtrar elementos del array
const numbers = [1, 2,3,4,5,6,7,8,9,10,11,12];
const numbers2 = [1, 13, 25, 2, 15 ,9,10,11,123,88, 4,5,6,7,8];
const names = ["Josue", "Mar", "Maara", "Marcos", "Karim", "Carlos", "carlos", "alan"];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log (evenNumbers);

const namesWithoutMar = names.filter((name) => { //name = "Mar");
const lowerName = name.toLocaleLowerCase();
return lowerName !== "mar";
});
console.log(evenNumbers);
console.log(namesWithoutMar);

//reduce tiene un valor que no tienen los otros que es un acumulado de los datos. va uniendo todo. ARGUMENTO TERMINA EN LA COMA
const total = numbers.reduce((accumulador, actual) => accumulador + actual, 0)
console.log({total}); //el acumulador siempre va a ser el primer parametro

//function suma(a,b){}; parametro placeholder para que sostenga 
//argumentos en suma(3,2)
//sort()

//APIS TIENEN ARRAYS

//INDEX OF
//para buscar pones lo que buscas y te regresa ek indice, si no existe regresa -1

console.log(numbers.indexOf(7));
console.log(numbers.indexOf(20)); //porque no existe da -1

//SORT ordenar un array 
// Array.prototype.toSorted() no muta el array original
console.log(numbers2.sort((a, b) => a - b)); //este si lo muta el original
console.log(numbers2.sort((a, b) => b - a)); //SI LO PONES EN CONSOLE SE VE EN CONSOLA

console.log(names.sort()); //LAS MINUSCULAS VALEN MAS