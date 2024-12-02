import "../../../styles/restaurant.css";
import { Jumbotron } from "../templates/jumbotron";

export default class AboutUs {
  render() {
    return `
        ${Jumbotron.create()}
        <section id="main" class="container" tabindex="0" style="margin:100px">
            <h2>Hello I'm Wahyu Pambudi</h2>
            <p> <a aria-label="Kunjungi Restaurant" target="_blank" href="https://linkedin.com/in/wahyup9/" class="visit-restaurant"><i class="fa-brands fa-linkedin-in"></i> My LinkedIn</a> </p>
            <div class="loader" aria-label="Sedang Memuat Data"></div>
            <div class="lists">
            </div>
        </section>

    `;
  }

  _hideLoading() {
    this.loadingIndicator.style.display = "none";
  }

  async afterRender() {
    this.loadingIndicator = document.querySelector(".loader");

    this._hideLoading();
  }
}
