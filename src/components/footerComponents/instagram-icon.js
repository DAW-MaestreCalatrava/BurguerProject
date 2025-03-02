class InstagramIcon extends HTMLElement {
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
          @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css');
          
          i {
            font-size: 17px;
            color: #fff;
            cursor: pointer;
          }

          i:hover{
            color:#E89A2F;
          }
        </style>
        <i class="fa-brands fa-instagram"></i>
      `;
    }
  }
  
  customElements.define('instagram-icon', InstagramIcon);