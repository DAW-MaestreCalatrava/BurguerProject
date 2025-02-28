class FooterComponent extends HTMLElement {
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
          footer {
            background-color:   #080808;
            color: #888888;
            display: flex;
            justify-content: space-between;
            align-items:center;
            padding: 14px 20px;
            position:fixed;
            bottom:0;
            width: 100%;
            box-sizing: border-box;
          }

          .icons{
            font-size: 17px;
            display: flex;
            gap: 11px;
          }
            
  
        </style>

        <footer>
        <span>Copyright2025. Design by Paradise Burger Team</span>
        <div class="icons">
          <instagram-icon></instagram-icon>
          <globe-icon></globe-icon>
          <truck-icon><truck-icon>
        </div>
        </footer>

      `;
    }
  }
  
  customElements.define('footer-component', FooterComponent);
