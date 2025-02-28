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
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* HTML */`
        <style>
            :host {
                background-color: ${this.hero ? 'rgba(44, 44, 44, 0.5)' : 'transparent'};
            }
        </style>
        ${this.getAttribute("foto") ? `<img src="${this.getAttribute("foto")}" alt="Imagen">` : ""}
        ${this.getAttribute("iconos") ? `<div class="iconos">${this.getAttribute("iconos")}</div>` : ""}

        ${this.getAttribute("title") ? `<text-component size="title" color="rgba(0, 0, 0, 0.5)" alignCenter="true">${this.getAttribute('title')}</text-component>` : ""}
        ${this.getAttribute("subtitle") ? `<text-component size="subtitle" color="#000" alignCenter="true">${this.getAttribute('subtitle')}</text-component>` : ""}
        ${this.getAttribute("body") ? `<text-component size="body" color="#222" alignCenter="true">${this.getAttribute('body')}</text-component>` : ""}
        ${this.hero ? `<button-component data-style="primary" data-state="normal" data-action="redirect" data-object="https://google.com">Ver más</button-component>` : ""}
        
      `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

}

customElements.define("card-component", BurguerCard);
