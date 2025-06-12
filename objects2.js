const user = {
    name: "Yalbani",
    age: 30,
    favoriteBand: "Lady Gaga",
    isAlive: true,
    favoriteFruits : ["Uvas" , "Sandia", "Mandarina"],
    adress: {
        zipCode: 5000,
        street: "Calle 123",
        colony: "COLONIA",
    },
};
const user2 = { ... user};
console.log(user);
console.log(user2);

user2.name = "Hola"; //SHALLOW COPY
console.log(user);
console.log(user2);

const user3 = structuredClone(user);
console.log(user3);
user3.name = "Aranda";
console.log(user);
console.log(user3);