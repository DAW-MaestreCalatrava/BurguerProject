class HeaderComponent extends HTMLElement {

    static get observedAttributes() {
        return ["src"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.src = this.getAttribute("src") || "";

        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                div{
                    height:4rem;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                img{
                    height: 100%;
                    width: auto;
                }
            </style>
            <div class="container">
                <img src="${this.src}">
            </div>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("header-component", HeaderComponent);