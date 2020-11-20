const apiKey = "";

const peticion = fetch(`url ${ apiKey }`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);