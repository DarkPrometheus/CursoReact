const getImagen = async () => {
    try {
        const apiKay = "";
        const resp = await fetch("URL");
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Manejo del error
    }
}