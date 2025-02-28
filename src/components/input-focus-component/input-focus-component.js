class InputFocusComponent extends HTMLElement {
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
            transition: box-shadow 0.3s ease;
          }
          input::placeholder {
            color: #ccc;
          }
          input:focus {
            outline: none;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
                        0 0 8px rgba(102, 175, 233, 0.6);
          }
        </style>
        <input type="text" placeholder="Focus me">
      `;
  }
}

customElements.define("input-focus-component", InputFocusComponent);
