const persona = {
    nombre: "Tony",
    apellidp: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 55443322,
        lat: 14.1234,
        lng: 34.4321
    }
};

//console.table(persona);
console.log(persona);

const persona2 = {...persona};
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);