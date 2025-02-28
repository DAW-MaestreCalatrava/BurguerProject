class ContactForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            max-width: 600px;
            margin: auto;
            font-family: Arial, sans-serif;
            text-align: center;
          }
          h2 {
            color: #e69835;
          }
          p {
            color: #666;
            margin-bottom: 20px;
          }
          form {
            display: flex;
            flex-direction: column;
          }
          input, textarea {
            margin: 10px 0;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          button {
            background-color: #e69835;
            color: white;
            padding: 10px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: #d0842f;
          }
        </style>
        <h2>Get In Touch</h2>
        <p><strong>Please give us your feedback!</strong><br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form>
          <input type="text" placeholder="Name" required>
          <input type="email" placeholder="Email" required>
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      `;
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("form")
      .addEventListener("submit", this.handleSubmit);
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("form")
      .removeEventListener("submit", this.handleSubmit);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.shadowRoot.querySelector('input[type="text"]').value;
    const email = this.shadowRoot.querySelector('input[type="email"]').value;
    const message = this.shadowRoot.querySelector("textarea").value;
    console.log("Form submitted:", { name, email, message });
   
  }
}

customElements.define("contact-form", ContactForm);
