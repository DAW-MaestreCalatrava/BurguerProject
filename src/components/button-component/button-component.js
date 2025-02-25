import styles from "./button-component.css" with {type: "css"};

class buttonComponent extends HTMLElement {
    /**
     * List of attributes that trigger a re-render of the component
     * when they are changed.
     * @returns {string[]} Array of attribute names
     */
    static get observedAttributes() {
        return ["data-style", "data-state", "data-action", "data-object"];
    }

    /**
     * Creates an instance of buttonComponent, attaches a shadow DOM,
     * initializes the 'type' attribute, and renders the component.
     */

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.buttonStyle = this.getAttribute("data-style") || "link";
        this.buttonState = this.getAttribute("data-state") || "normal";
        this.buttonAction = this.getAttribute("data-action") || "";
        this.buttonObject = this.getAttribute("data-object") || "";
        this.render();
    }

    /**
     * Renders the component
     * @description
     * This method renders the component based on the current state of
     * the component. It is called whenever the component is
     * initialized or when the 'type' attribute is changed.
     */
    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";

            </style>

            <button data-style="${this.buttonStyle}" data-state="${this.buttonState}">
                <span>
                    <slot>
                    </slot>
                </span>
            </button>
            `;
        const button = this.shadowRoot.querySelector("button");
        button.addEventListener("click", this.handleClick.bind(this));
    }

    /**
     * Called when any of the attributes in `observedAttributes` change
     * @description
     * This method is called by the browser when any of the attributes
     * in the `observedAttributes` array change. It is responsible for
     * re-rendering the component based on the new state of the attributes.
     */
    attributeChangedCallback() {
        this.render();
    }

    /**
     * Called when the element is inserted into a document
     * @description
     * This method is called by the browser when the element is
     * inserted into a document. It is responsible for rendering
     * the component for the first time.
     */
    connectedCallback() {
        this.render();

    }


    /**
     * Handles the click event on the button
     * @description
     * This method is called whenever the button is clicked. It checks
     * the value of the 'data-action' attribute and performs the
     * corresponding action. If the action is 'redirect', it calls the
     * 'redirect' method. If the action is 'submit', it calls the 'submit'
     * method. If the action is anything else, it logs a warning to the
     * console.
     */
    handleClick() {
        const form = document.querySelector('form');
        switch (this.buttonAction) {
            case "redirect":
                this.redirect(this.buttonObject);
                break;
            case "submit":
                this.submit(((form) ? form.id : NULL));
                break;
            default:
                console.warn("Debes elegir una opción de acción (redirect/submit)");
                break;
        }
    }

    /**
     * Redirects the user to the given URL
     * @param {string} url the URL to redirect the user to
     * @description
     * This method is called by the 'handleClick' method when the
     * 'data-action' attribute is set to 'redirect'. It takes a URL as
     * a parameter and redirects the user to that URL. If no URL is
     * given, it logs an error to the console.
     */
    redirect(url) {
        if (url) {
            window.location.href = url;
        } else {
            console.error("Debes de introducir una URL para redirigir");
        }
    }

    /**
     * Submits the form with the given id
     * @param {string} formId the id of the form to submit
     * @description
     * This method is called by the 'handleClick' method when the
     * 'data-action' attribute is set to 'submit'. It takes a form id as
     * a parameter and submits the form with that id. If no form id is
     * given, it logs an error to the console.
     */
    submit(formId) {
        if (formId) {
            // Select the form using the provided formId
            const formulario = document.querySelector(`#${formId}`);

            formulario.submit();

            if (formulario) {
                // Submit the form if it exists
                formulario.submit();
            } else {
                // Log an error if the form with the provided id does not exist
                console.error("No se ha encontrado el Id del formulario");
            }
        } else {
            console.error("No se ha pasado el parametro del formulario");
        }

    }


}

customElements.define("button-component", buttonComponent);