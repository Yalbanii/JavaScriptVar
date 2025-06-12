// stack
//queu
//hash table
//arboles binario

const user = {
    name: "Yalbani",
    age: 30,
    favoriteBand: "Lady Gaga",
    isAlive: true;
    favoriteFruits : ["Uvas" , "Sandia", "Mandarina"],
    adress: {
        zipCode: 5000,
        street: "Calle 123",
        colony: "COLONIA",
    },
};

console.log(user.adress); //CUANDO SE USEN CORCHETES VAN ENTRE COMILLAS
console.log(user.adress.street);
console.log(user["age"]);
console.log(user["favoriteFruits"][2]);
console.log(user.favoriteFruits[1]);
console.log(user["adress"].street);
//saber si existe una llave en el objeto
console.log(user.hasOwnProperty("age"));
console.log(user.hasOwnProperty("favoriteColor"));

//AGARRA TODAS LAS LLAVES Y LAS METE EN UN ARRAY. Se ocupa directo desde clase objeto
console.log(Object.keys(user));

//toma todos los valores y los mete en un array, se ocupa directo desde la clase objeto
console.log(Object.values(user));