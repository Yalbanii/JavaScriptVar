//Parte de arrays
const names = ["Fernando", "Josue", "Mar", "Maara", "Marcos", "Karim"];
//Para saber el tamaño del array es con nombrearray.length (Dimensión en inglés)
//Nos va a dar el tamaño real del array, es decir si tenemos 6 datos en el array
//Nos va a devolver 6
console.log(names.length);

//Se pueden imprimir todos los archivos de un array usando un ciclo for
//Donde la condición de parada sea el tamaño del arreglo
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//Tambien se pueden imprimir los elementos de un array mediante Foreach
//Hay dos formas de usar el foreach, con función normal y con función flecha
//Foreach con función flecha
console.log("Con foreach con funcion flecha");
names.forEach((el) => console.log(el));

//Foreach con función normal
console.log("Con foreach con función normal");
names.forEach(function(elemento){
    console.log(elemento);
});

//Agregar o eliminar elementos de un array.
//Queue - Cola - FIFO First Input First Output.
//Stack - Pila - LIFO Last Input First Output.
//Un array de javascript se comporta como una fila.
//Es decir si hacemos Pop, se va a eliminar el ultimo elementos de la lista.
//Si hacemos Push, se va a agregar un elemento al final de la fila.

//Ejemplo

//Se le asigna a una variable el ultimo elemento del arreglo
const lastElement = names.pop();
//Se imprime el valor guardado en lastElement
console.log(lastElement);
//Se añade Ricardo como ultimo elemento del arreglo
names.push("Ricardo");
//Se imprime el nuevo arreglo
console.log(names);

//unshift y shift
//Estos metodos nos permiten hacer que nuestro array se comporte como una cola
//Es decir si usamos Shift sacamos el primer elemento del array
//Y si usamos Unshift agregamos un elemento al inicio del array

//Ejemplo

//Se le asigna a una variable el primer elemento del array
const firstElement = names.shift();
//Se imprime el primer elemento que había en el arreglo
console.log(firstElement);
//Se imprime el arreglo nuevo
console.log(names);
//Se añade Sarai como primer elemento del arreglo
names.unshift("Sarai");
//Se imprime el nuevo arreglo 
console.log(names);