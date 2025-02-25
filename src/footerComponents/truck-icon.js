class TruckIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
        
        i {
          font-size: 20px;
          color: black;
          cursor: pointer;
        }

        i:hover{
          color:#E89A2F;
        }
      </style>
      <i class="fa-solid fa-truck"></i>
    `;
  }
}

customElements.define('truck-icon', TruckIcon);