const { getHeroeById } = require("./bases/08-ImportacionesExportaciones");

/*const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        console.log(heroe);
        resolve(heroe);
    }, 2000);
});

promesa.then((heroe) => {
    console.log("Heroe", heroe)
})
    .catch(err => console.warn(err));*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);  
            }
            else {
                reject("No se encontro el heroe");
            }

        }, 2000);
    });
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);