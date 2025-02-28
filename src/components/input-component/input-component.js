class InputComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
          input {
            border: 1px solid #ccc;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            padding: 8px;
            font-size: 16px;
          }
          input::placeholder {
            color: #ccc;
          }
        </style>
        <input type="text" placeholder="Enter text">
      `;
  }
}

customElements.define("input-component", InputComponent);
