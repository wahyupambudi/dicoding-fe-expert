
import RestaurantPage  from "../views/pages/RestaurantPage";
import AboutUs from "../views/pages/AboutUs";

// TODO : Siapkan Routes
const routes = {
  "/": new RestaurantPage(),
  "/about-us": new AboutUs(),

};

export default routes;
