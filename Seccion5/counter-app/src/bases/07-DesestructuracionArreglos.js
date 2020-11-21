const personajes = ["Goku", "Vegeta", "Trunks"];

const [P0] = personajes;
const [, P1] = personajes;
const [, , P2] = personajes;

const retornaArreglo = () => {
    return ["ABC", 123];
}

const [letras, numeros] = retornaArreglo();

const useState = (valor) => {
    return [valor, () => { console.log("Hola mmund") }];
}

const [nombre, setNombre] = useState("Goku");