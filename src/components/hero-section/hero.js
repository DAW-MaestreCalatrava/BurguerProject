import styles from "./hero.css" with { type: "css" };

class HeroSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* HTML */ `
            <card-component title="Paradise Burguer" subtitle="La mejor hamburgueseria de Ciudad Real" hero="true"></card-component>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("hero-section", HeroSection);