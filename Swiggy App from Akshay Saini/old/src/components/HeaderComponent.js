import logo from "../../resource/images/logo.jpg";
import React from "react";

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
export default HeaderComponent;
