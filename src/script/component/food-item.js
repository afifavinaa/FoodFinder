class FoodItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: 	gainsboro;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          overflow: hidden;
        }
        .photo-food {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .food-info {
          padding: 24px;
        }
        .food-info > h2 {
          font-weight: bold;
        }
        .food-info > p {
          margin-top: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="photo-food" src="${this._food.photo}" alt="Photo Food">
      <div class="food-info">
        <h2>${this._food.name}</h2>
        <p>${this._food.description}</p>
      </div>
    `;
  }
}

customElements.define('food-item', FoodItem);
