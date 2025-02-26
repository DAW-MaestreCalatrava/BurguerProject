class GlobeIcon extends HTMLElement {
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
            font-size: 21px;
            color: black;
            padding-right: 7px;
            cursor: pointer;
          }
          
          i:hover{
          color:#E89A2F;
          }
        </style>
        <i class="fa-solid fa-globe"></i>
      `;
    }
  }
  
  customElements.define('globe-icon', GlobeIcon);