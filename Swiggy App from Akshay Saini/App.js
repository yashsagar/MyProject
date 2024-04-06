import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./resource/images/logo.jpg";
import searchIcon from "./resource/images/search-icon.svg";

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
  return (
    <header>
      <img className="company-logo" src={logo} alt="company logo" />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contect us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const RestroCard = (props) => {
  return (
    <div className="card card-1">
      <div className="img-wrapper">
        <img
          className="restaurant-image"
          src={props.img}
          alt="restaurant image"
        />
      </div>
      <div className="text-info-wrapper">
        <h4 className="restaurant-name">Megana Foods</h4>
        <p className="cusin"> Biryani, North Indian, Asian</p>
        <div className="info-wrapper">
          <p className="rating">4.5</p>
          <div className="dot"></div>
          <p className="time">25-30 mins</p>
        </div>
        <p className="place">Hebbal Mysore </p>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body-wrapper">
      <div className="search-wrapper">
        <img src={searchIcon} alt="search icon" />
        <input type="text" className="search-input"></input>
        <button className="search-btn">Search</button>
      </div>
      <div className="reastro-card-wrapper">
        <RestroCard img={require("./resource/images/image-1.jpg")} />
        <RestroCard img={require("./resource/images/image-2.jpg")} />
        <RestroCard img={require("./resource/images/image-3.jpg")} />
      </div>
    </div>
  );
};

const FooterComponent = () => {
  return <footer></footer>;
};

const App = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

root.render(<App />);
