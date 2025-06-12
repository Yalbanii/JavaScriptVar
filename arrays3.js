

const names = ["Josue", "Mar", "Maara", "Marcos", "Karim", "Carlos"];
const namesCopy = names; //SE COPIA LA REFERENCIA EN 2 VARIABLES DIFERENTES es una copia shalow o blanda
console.log(names);
console.log(namesCopy);

namesCopy[4] = "Amauri";
console.log(names);
console.log(namesCopy); //CAMBIO EN LOS 2 ARRAYS

//spreed operator VA A LA DERECHA
const namesClone = [ ... names]; //PARA EVITAR COPIAS BLANDAS
console.log(names);
console.log(namesClone);
namesClone[4] = "Ernesto";
console.log(names);
console.log(namesClone);

//rest operator EL PRIMERO QUE APAREZCA VA A SER EK PRIMERO, ARRAYS SIEMPRE VAN EN  ORDEN. LOS OBJETOS NO
const [primerito, ernesto, , , ... demas] = names;
console.log({ernesto});
console.log({primerito});
console.log({demas});


//let counter = 10;
//let counterCopy = 11;
//console.log(counter)
//[[[]]] PUEDE DAR ERROR
//