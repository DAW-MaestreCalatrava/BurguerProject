import "./src/index.js";
import "./src/footer/footer-component.js";
import "./src/footerComponents/instagram-icon.js";
import "./src/footerComponents/globe-icon.js";
import "./src/footerComponents/truck-icon.js";

document.addEventListener("DOMContentLoaded", async () => {

    const header = document.querySelector("nav-component");

    //Creamos una url
    const url = new URL(location.href)
    let position;
    console.log(url.pathname.length);
    
    if (url.pathname.length == 1) {
        position = url.pathname;
    } else {
        position = url.pathname.substring(0, (url.pathname.length - 1));

    }
    console.log("Ubicación: ", position);

    //Lista de links
    const listItem = [
        { texto: "Inicio", url: "/", posicionActual: position },
        { texto: "Contacta con nosotros", url: "/contacta", posicionActual: position },
        { texto: "Conócenos", url: "/conocenos", posicionActual: position },
        
    ];


    header.items = listItem
});