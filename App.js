import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/food_villa_logo.jpeg";
import burgerKingIcon from "./assets/burger_king.png";
import subwayIcon from "./assets/subway-logo.jpg";
import vadilalIcon from "./assets/vadilal.png";
import bigDadyIcon from "./assets/big_dady.jpeg";
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

const Body = () => {
  return <div>Body</div>;
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
