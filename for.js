/**
 * (1. El contador comunmente primero se llama i
 * 2. La condicion para parar
 * 3. El incremento del contador)
 * ENTRE LAS LLAVES VA LA LOGICA
 */

for(let i = 0; i <= 100; i+=10){
console.log(i);
}

for(let i=0; i <= 100; i++){
    if(i < 100) {
        console.log (i);
        continue;
    } else {
        console.log("Ya va a terminar el bucle");
        break;
    }
}