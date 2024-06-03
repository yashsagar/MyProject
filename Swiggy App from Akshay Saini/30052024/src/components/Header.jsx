import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" main-wrapper flex items-center">
      <div>
        <img className="w-16 h-16" src={logo} alt="logo" />
      </div>
      <div className=" ml-auto">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/"> Home </Link>{" "}
            </li>
            <li>
              <Link to="/contectUs"> Contect Us </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
