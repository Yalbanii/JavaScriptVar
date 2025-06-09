/* Expone las variables a nivel global y ya no se recomienda su uso*/
var name = "Yalbani";
/* Let permite crear variables que pueden ser reasignadas*/
let age = 30;
console.log(age);
age = 32;
console.log(age);
/* const permite crear constantes, donde elvalor no puede ser reasignado*/
const lastName = "Aranda";
console.log(lastName);
//! lastName = "Cardona";//

const arr = ["Yalbani", "Febe", "Arti"];
console.log(arr);
arr[0]= "Aranda";
console.log(arr);
/* array pasados por referencia*/ //! const no queremos que cambie//

console.log(1 + "1");
/* string no se suma, se concatena. El 1 es texto*/
console.log(4 + "4");
console.log("10"/2);
/* JS intenta cambiar siempre el tipo de dato*/
console.log("38" - 1);
console.log(+"246");
/* Lo transforma a numero*/
/* True y False solo pasan en JS y TypeScript. falsy null; undefined, nan, 0, "".
truthy*/
console.log(10/0);
console.log(Boolean([])); //? Da true;//
console.log(Boolean("")); //? Da false;//
console.log(Boolean(0)); //? Da false;//

//*OPERADORES ARITMETICOS*//
//suma
console.log(1+1);
//concatenar
console.log ('Yalbani'+ " Aranda");
//resta
console.log(75-25);
//dividir
console.log(20/10);
//smodulo regresa el resto de una division
console.log(15%2);
console.log(14%2);
//multiplicacion
console.log(2*2);
//potencia primer numero es la base, el segundo es exponente
console.log(4 ** 3);
//incremento
let counter = 0;
console.log(counter++); //Este incremento primero evalua y luego suma 1
console.log(counter); //Este incremento suma
console.log(++counter);//Este incremento primero suma y luego evalua
//DECREMENTO
console.log(counter--); //Este incremento primero evalua y luego resta 1
console.log(counter); //Este incremento resta
console.log(--counter);//Este incremento primero resta y luego evalua

//operacion y reasignacion
counter += 10;
console.log(counter);
counter -= 5;
console.log(counter);
counter *= 10;
console.log(counter);
counter /= 2;
console.log(counter);
counter %= 10; //El resto de dividir
console.log(counter);
counter **= 3; //Toma el valor que tiene la variable como base y lo eleva al nuevo numero
console.log(counter); //No salia porque no tenia console.log

//*OPERADORES ARITMETICOS para hacer con resultados booleanos*//
//or || , regresa true si alguno de los 2 lados es verdadero. FALSE si ambos lados son falsos.
console.log(false || false); //*false*//
console.log(false || true); //*true*//
console.log(true || false); //*true*//
console.log(true || true); //*true*//
console.log(10 || 0); //*el 0 es false, da 10*//
console.log(0 || 10); //*el 0 es false, da 10*//
console.log(0 || 0); //*el 0 es false, da 0*//
console.log(undefined || "Pedro"); //*Pedro es valor verdadero*//
console.log("Arti" || null); //*null es falso*//

//and &&, regresa true solo si ambos lados de la expresion son verdaderos, si no regresa false*//
console.log(true || false); //*false*//
console.log(true || true); //*true*//
console.log(false || true); //*false*//
console.log("" || "Pedro"); //*Pedro*//

//not, regresa el valor inverso, o sea si es true regresa false, si es false regresa true*//
console.log(!true); //*false*//
console.log(!false); //*true*//


//*OPERADORES DE COMPARACION y LOGICOS*//
// == de comparacion basico//
console.log(1==1); //*true*//
console.log(1.1 + 0.2 == 1.3); //*true*//
console.log("1"== 1); //*true*//
console.log(NaN == NaN); //*false*//
console.log([] == []); //*false los arrays no apuntan a un valor, sino a un espacio de memoria diferente*//


// === de comparacion estricta, compara valor y tipo de dato.//
// !RECOMENDADO SIEMPRE USAR ESTE //
console.log("1" === 1); //*false*//
console.log(NaN === NaN); //*false*//

// >=  <=
console.log(3 <= 3); //*true*//
console.log(3 < 3); //*false*//
console.log(3 >= 3); //*true*//
console.log(4 > 5); //*false*//


// ?? evalua solo null y undefined como false. solo evalua el null y el undefined como falso ||    || 0 falso   || "" false// 
console.log(0 ?? 2); //*0*//
console.log(null ?? 0); //*0*//
console.log(null ?? 2); //*2*//
console.log(undefined ?? 2); //*2*//
console.log("" ?? 2); //*"*//

// !=    !== ESTRICTO
console.log("1" != 1); //*false*//
console.log("1" !== 1); //*true*//
