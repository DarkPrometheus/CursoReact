const saludar = function(nombre){
    return `Hola,  ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola,  ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola,  ${nombre}`;

const saludar4 = () => `Hola,  mundo`;

const getUser = () => ({
    uid = "ABC123",
    username: "ElCanis"
})

const getUsuarioActivo = (nombre) => ({
    uid = "ABC123",
    username: nombre
})

const usuarioActivo = getUsuarioActivo("Emmanuel");