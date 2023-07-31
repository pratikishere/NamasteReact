import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/food_villa_logo.jpeg";
import ratingHighIcon from "./assets/rating-high.png";
import restaurantsJSON from "./mock-data/restaurants.json";

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

const BodySection = () => {
  return (
    <div>
      <RestaurantGrid />
    </div>
  );
};

let restaurants = restaurantsJSON.restaurants;

const RestaurantGrid = () => {
  return (
    <div className="restaurant-grid">
      {restaurants.map((restaurant) => {
        return <RestaurantCard restaurant={restaurant} />;
      })}
    </div>
  );
};

const RestaurantCard = ({ restaurant }) => {
  const { name, imageURL, rating, cusines, location } = restaurant;

  return (
    <div className="restaurant-card">
      <div className="restaurant-image-container">
        <img className="restaurant-image" src={imageURL} alt="No image" />
      </div>

      <div className="restaurant-content">
        <div className="restaurant-title">{name}</div>
        <div className="restaurant-ratings">
          <img
            className="restaurant-rating-image"
            src={ratingHighIcon}
            alt=""
          />
          {rating}
        </div>
        <div className="restaurant-subtitle">{cusines.join(", ")}</div>
        <div className="restaurant-location">{location}</div>
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
