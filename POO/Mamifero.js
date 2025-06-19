//inicio de una clase//
export class Mamifero{
  //atributos, propiedades o variables de instancia//
  _patas;
  producenLeche;
  cuernos;
  especie;
  pelo;
  numDientes; 
  cola;
  name;
  static numDientes2 = 10; //PROPIEDAD ESTATICA//le ponemos valor predeterminado//

  //Metodo constructor, llamado cuando creamos un objeto nuevo//
  constructor(_patas,producenLeche,cuernos,especie,pelo, numDientes,cola, name){
    this._patas = _patas;
    this.producenLeche = producenLeche;
    this.cuernos = cuernos; //asignar el parametro a la variable de instancia//
    this.especie = especie;
    this.pelo = pelo;
    this.numDientes = numDientes;
    this.cola = cola;
    this.name = name; 
  }
set setName(newName){
  this.name = newName; //ESO HACE UN SETTER, FIJAN UN NUEVO VALOR//
}
get getName(){
  return this.name;
}//GETTER DEVUELVE UN VALOR DE LA PROPIEDAD//

set setPatas(newNumPatas){
  this._patas = newNumPatas;
}
get getNumPatas(){
  return this._patas
}
set setProducenLeche(newBoolean){
  this.producenLeche = newBoolean;
}
get getProducenLeche(){
  return this.producenLeche;
}
set setCuernos(newCuernos){
  this.cuernos = newCuernos; //ESO HACE UN SETTER, FIJAN UN NUEVO VALOR//
}
get getCuernos(){
  return this.cuernos;
}
set setEspecie(newEspecie){
  this.especie = newEspecie; //ESO HACE UN SETTER, FIJAN UN NUEVO VALOR//
}
get getEspecie(){
  return this.especie;
}
set setPelo(newPelo){ //setPelo nombre del modelo
  this.pelo = newPelo; //ESO HACE UN SETTER, FIJAN UN NUEVO VALOR//
}
get getPelo(){
  return this.pelo;
}
set setNumDientes(newNumDientes){
  this.numDientes = newNumDientes; //ESO HACE UN SETTER, FIJAN UN NUEVO VALOR//
}
get getNumDientes(){
  return this.numDientes;
}
set setCola(newCola){
  this.cola = newCola; //ESO HACE UN SETTER, FIJAN UN NUEVO VALOR//
}
get getCola(){
  return this.cola;
}

/*CREAR METODO DE INSTANCIA. Se ejecutan desde el objeto que se crea con base en la clase*/
hacerSonido(){
  return "Sonido generico de animal";
}
/*Los metodos estaticos se ejecutan desde la clase, no es necesario crear un objeto.*/
static tieneDientes(){
  console.log(this.numDientes2)
 // return "Hola, tengo dientes"//
 if(this.numDientes > 0) return true;
  return false;
}
} //fin de clase//

//objeto creado a partir de la clase Mamifero//
const leon = new Mamifero(4, true, 0, "felino", true, 30, true, "Simba");
//SOLO LOS GETTERS NO NECESITAN PARENTESIS//
console.log(leon.getCola);
console.log(leon.hacerSonido()); //METODO DE INSTANCIA//
console.log(leon.getNumDientes);
leon.setNumDientes = 32;
console.log(leon.getNumDientes);
console.log(Mamifero.tieneDientes());
console.log(leon.getName);
//METODO ESTATICO SE LLAMA DESDE LA CLASE, LOS NO ESTATICOS SE LLAMAN DESDE EL OBJETO//