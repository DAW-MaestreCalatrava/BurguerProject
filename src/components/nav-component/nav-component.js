class NavComponent extends HTMLElement {
    // static get observedAttributes() {
    //     return [""];
    // }

    /**
     * Constructs a new instance of the NavComponent.
     * @description
     * This constructor initializes the shadow DOM and sets up the initial state
     * of the Nav component, including setting an empty array for menu items.
     */

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.menuItems = [];
    }

    /**
     * Sets the menu items for the Nav component and triggers a re-render.
     * @param {Array} data - An array of menu items to be set.
     */

    set items(data) {
        this.menuItems = data;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                
                @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
            </style>
            <nav>
            ${this.menuItems
                .map((item) => `<button-component data-style="link" data-state="${((item.url!==item.posicionActual)?'normal':'active')}" data-action="redirect" data-object="${item.url}">${item.texto}</button-component>`)
                .join(" ")}
            </nav>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("nav-component", NavComponent);