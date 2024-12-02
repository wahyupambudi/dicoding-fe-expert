export const RestaurantTemplate = {
  create: (restaurant) => {
    const restaurantCard = document.createElement("div");
    restaurantCard.classList.add("card");
    restaurantCard.innerHTML = `
      <h3 class="restaurant-card-title">${restaurant.name}</h3>
      <img src="${restaurant.pictureId}" alt="${restaurant.name} avatar" class="img-restaurant">
        <p class="restaurant-card-description">${restaurant.description}</p>
        <div class="restaurant-card-body">
            <div class="right">
                <div class="restaurant-stats">
                    <p class="visit-restaurant"><span class="visually-hidden">Rating</span><i class="fa-solid fa-star"></i> <span>${restaurant.rating}</span></p>
                    <p class="visit-restaurant"><span class="visually-hidden">Kota</span><i class="fa-solid fa-code-fork"></i> ${restaurant.city}</p>
                    <a aria-label="Kunjungi Restaurant" target="_blank" href="#" class="visit-restaurant"><i class="fas fa-pizza-slice"></i> Kunjungi Restaurant</a>
                </div>
            </div>
        </div>
        `;

    return restaurantCard;
  },
};
