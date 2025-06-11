let counter = 0;
/* while(counter <100){
    console.log(counter);
} */ /*HACE QUE EXPLOTE LA COMPU HAY QUE TENER CLARA LA CONDICION Y EVITAR CICLOS INFINITOS*/
 /* let counter = 0;
while(counter <100){
    console.log(counter);
    counter++; /* primero muestra y luego suma */
//}
 //    let counter = 0;
//while(counter <100){
//   counter++; /* primero suma y luego muestra*/
 //      console.log(counter);
//}
/* brake; esta reservada para el bucle completo
continue esta todo lo que este debajo de la palabra continue es ignirado y vuelve al comienzo del bucle
*/
while(true){
    console.log(counter);
    if(counter <100){
        counter++
        continue; /*borra todo el codigo que siga despues y se regresa hasta el inicio del bucle*/
    } else {
        console.log("ya va a terminar el bucle");
        break;
    }
    console.log("hola, estoy despues del continue");
}
 //let counter = 1;
/*while(true){
    console.log(counter);
    (counter <= 100);
    if((counter % 2) == 0){ 
            counter++;    

} */ 
    /*BUCLE INFINITO */