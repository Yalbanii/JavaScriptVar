/*let counter = 0;
do{
counter++;
console.log(counter);
} while (counter <100);
    se ejecuta 1 vez al menos*/

    do{
        console.log(counter);
        if (counter < 100){
            counter++;
            continue;
        } else {
            console.log("Ya va a terminar el bucle");
            break;
        }
        console.log("hola, estoy despues del continue");
    } while (true);

    /*BUCLE INFINITO */
   /* do {
        console.log(counter);
     (counter <= 100);
        if {((counter % 2) == 0);
            counter++;
            console.log ("El numero es par");
    } else {
        console.log ("El numero es impar");
    }
    break;
} while (true); */ 

