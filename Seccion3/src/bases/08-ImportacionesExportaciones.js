//import { heroes } from "./data/heroes";
import heroes, { owners } from "../data/heroes";

const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);

const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

export {
    getHeroeById
}