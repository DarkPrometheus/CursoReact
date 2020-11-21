const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman"
};

const { edad, clave, nombre } = persona;

const retornarPersona({ nombre, edad, rango = "Capitan" }){
    console.log(nombre, edad, rango);
}

const useContext({ nombre, edad, rango = "Capitan" }){
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: 12.3232
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = useContext(retornarPersona);