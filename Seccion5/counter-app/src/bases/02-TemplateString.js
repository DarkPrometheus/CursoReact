const nombre = "Emmanuel";
const apellido = "Frias";

const NomnbreCompleto = `${nombre} ${apellido}`;
const NomnbreCompleto = `
${nombre}
${apellido}
${1 + 1}
`;

console.log(NomnbreCompleto);

function getSaludo() {
    return "Hola mundo";
}

console.log(`Este es un texto: ${getSaludo()}`);