import "./src/index.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Selecciona un contenedor donde agregar tus componentes
  // Puedes tener un contenedor específico en tu index.html, por ejemplo:
  // <div id="app"></div>
  const app = document.getElementById("app") || document.body;

  // Crear y agregar el componente BurguerComponent
  const burgerComp = document.createElement("burger-component");
  app.appendChild(burgerComp);

  // Crear y agregar el input normal
  const inputComp = document.createElement("input-component");
  app.appendChild(inputComp);

  // Crear y agregar el input con focus
  const inputFocusComp = document.createElement("input-focus-component");
  app.appendChild(inputFocusComp);

  // Crear y agregar el formulario de contacto
  const contactForm = document.createElement("contact-form");
  app.appendChild(contactForm);

  // Aquí puedes agregar lógica adicional, como listeners globales o inicializar otros módulos.
});
