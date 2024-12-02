import restaurantsData  from "../../../public/data/DATA.json";
import { RestaurantTemplate } from "../templates/restaurant-card";
import "../../../styles/restaurant.css";
import { Jumbotron } from "../templates/jumbotron";

export default class RestaurantPage {
  render() {
    this._setTitle();
    return `
        ${Jumbotron.create()}
        <section id="main" class="container" tabindex="0">
            <h2>Welcome to Restaurant App</h2>
            <p>Explore the best restaurant on the world</p>
            <div class="loader" aria-label="Sedang Memuat Data"></div>
            <div class="lists">
            </div>
        </section>

    `;
  }

  _hideLoading() {
    this.loadingIndicator.style.display = "none";
  }

  _showLoading() {
    this.loadingIndicator.style.display = "block";
  }

  _setTitle() {
    document.title = "Restaurant App";
  }

  async afterRender() {
    this.loadingIndicator = document.querySelector(".loader");

    this._showLoading();
    const restaurantData = restaurantsData.restaurants;
    restaurantData.forEach((restaurant) => {
      const restaurantCard = RestaurantTemplate.create(restaurant);
      document.querySelector(".lists").appendChild(restaurantCard);
    });
    this._hideLoading();
  }
}
