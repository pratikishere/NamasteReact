import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/food_villa_logo.jpeg";
import ratingHighIcon from "./assets/rating-high.png";
import data from "./data.json";

// Header
const Header = () => {
  return (
    <div className="header">
      <HeaderLeftSection />
      <HeaderRightSection />
    </div>
  );
};

const AppLogo = () => <img className="logo" alt="logo" src={logo}></img>;

const Title = () => (
  <h1 id="title" key="h1">
    Food Villa
  </h1>
);

const HeaderLeftSection = () => (
  <div className="headerLeftSection">
    <AppLogo />
    <Title />
  </div>
);

const HeaderRightSection = () => (
  <div className="headerRightSection">
    <div className="nav-item">Home</div>
    <div className="nav-item">About</div>
    <div className="nav-item">Contact</div>
    <div className="nav-item">Cart</div>
  </div>
);

const restaurantListFromJson = data.data.cards[0].data.data.cards;

const BodySection = () => {
  return (
    <div>
      <RestaurantGrid />
    </div>
  );
};

const RestaurantGrid = () => {
  return (
    <div className="restaurant-grid">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image-container">
        <img
          className="restaurant-image"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4"
          alt="No image"
        />
      </div>

      <div className="restaurant-content">
        <div className="restaurant-title">McDonald's</div>
        <div className="restaurant-ratings">
          <img
            className="restaurant-rating-image"
            src={ratingHighIcon}
            alt=""
          />
          4.3
        </div>
        <div className="restaurant-subtitle">
          Burgers, Beverages, Cafe, Desserts, Burgers, Beverages, Cafe, Desserts
        </div>
        <div className="restaurant-location">
          Pimpri long address Pimpri long
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <BodySection />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
