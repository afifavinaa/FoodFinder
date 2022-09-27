class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-align: center;
        }
        :host {
          display: block;
          width: 100%;
          background-color: lightgrey;
          color: white;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
        }
        h2 {
          padding: 25px;
          font-family: 'Segoe UI';
        }
      </style>
      
      <h2>Food by Categories</h2>
    `;
  }
}

customElements.define('app-bar', AppBar);
