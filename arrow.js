//ARROW FUNCTION. Tiene una ligadura, un return =>, hace return inmediato. Si solo es una linea no hay que hacer return.
const sumar = (a,b) => a + b;
//* para pedir datos se usa funcion prompt y dentro el mensaje que queramos que se mande. Todo se bloquea hasta que se cierra

// console.log(name);
const saludar = () =>{
    const name = prompt("Ingresa tu nombre");
    const age = Number(prompt("Ingresa tu edad"));
    alert("En 10 años vas a tener " + (age + 10) + "años");
    alert("Hola " + name + ", Bienvenido a Generation");
};
console.log(sumar(4,6)); //* 10 *//
saludar (); 
//console.log(saludar()); //* nombre 1 *//
//console.log(saludar());//* nombre 2 *//
//console.log(saludar());//* nombre 3 *//
//console.log(saludar());//* nombre 4 *//
//! recuerda cerrar porque se bloquea. Si no has llamado la funcion no corre. NO SE RECOMIENDA SU USO