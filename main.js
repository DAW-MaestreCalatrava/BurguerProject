import "./src/index.js";



document.addEventListener("DOMContentLoaded", async () => {

    const header = document.querySelector("nav-component");

    //Creamos una url
    const url=new URL(location.href)
    const position = url.pathname.substring(0,(url.pathname.length-1));
    console.log("Ubicación: ", position);

    //Lista de links
    const listItem = [
        { texto: "Inicio", url: "/" , posicionActual: position},
        { texto: "Contacta con nosotros", url: "/contacta" , posicionActual: position},
        { texto: "Conócenos", url: "/conocenos" , posicionActual: position},
        { texto: "componentes", url: "/components" , posicionActual: position},
    ];


    header.items = listItem
});