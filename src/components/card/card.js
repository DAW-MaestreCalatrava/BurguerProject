import styles from "./card.css" with {type: "css"};

class BurguerCard extends HTMLElement {

    // Define los atributos que se van a observar
    static get observedAttributes() {
        return ["title", "subtitle", "body", "foto", "iconos", "hero"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.hero = this.getAttribute("hero") || false;

        this.render();
    }


    render() {
        // Verificar si el valor de hero es true o false
        const backgroundColor = this.hero ? 'rgba(0, 0, 0, 0.5)' : 'transparent';
        const textColor = this.hero ? 'white' : 'black';

        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* HTML */`
        <style>
            :host {
                background-color: ${backgroundColor};
            }
        </style>
        
        ${this.getAttribute("foto") ? `<img src="${this.getAttribute("foto")}" alt="Imagen">` : ""}
        ${this.getAttribute("iconos") ? `<div class="iconos">${this.getAttribute("iconos")}</div>` : ""}

        ${this.getAttribute("title") ? `<text-component size="title" color="${textColor}" alignCenter="true">${this.getAttribute('title')}</text-component>` : ""}
        ${this.getAttribute("subtitle") ? `<text-component size="subtitle" color="${textColor}" alignCenter="true">${this.getAttribute('subtitle')}</text-component>` : ""}
        ${this.getAttribute("body") ? `<text-component size="body" color="${textColor}" alignCenter="true">${this.getAttribute('body')}</text-component>` : ""}
        ${this.hero ? `<button-component data-style="primary" data-state="normal" data-action="redirect" data-object="#">Ver Menú</button-component>` : ""}
      `;
    }

    // Callback cuando se cambian los atributos
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'hero') {
            this.hero = newValue === 'true'; // Aseguramos que sea un booleano
        }
        this.render();
    }

    connectedCallback() {
        this.render();
    }

}

customElements.define("card-component", BurguerCard);
