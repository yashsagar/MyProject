import { NavLink, Link } from "react-router-dom";
import { useDropdown } from "../hooks";
import { useSelector } from "react-redux";

import Theme from "./Theme";

const Navbar = () => {
  const handelDropdown = useDropdown();
  const showLogin = useSelector((state) => state.login.dropdown);

  const active = ({ isActive }) =>
    isActive ? "text-red-400 border-b border-color-text-green" : "";

  return (
    <div className=" flex justify-between pt-4 items-center main-wrapper">
      <div className="text-4xl pb-2 cursor-pointer tracking-tighter font-bold ">
        <Link to="/">
          Yash
          <span className="bg-color-text-green text-2xl w-2 h-2 rounded inline-block ml-2 "></span>
        </Link>
      </div>
      <ul className="flex gap-4 font-bold ">
        <NavLink to="/" className={active}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className={active}>
          <li>About me</li>
        </NavLink>
        <NavLink to="/contact" className={active}>
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="flex gap-4">
        <div
          className="w-9 h-9  dark:bg-slate-500  bg-slate-300 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => {
            handelDropdown("theme");
          }}
        >
          <Theme />
        </div>
        <div className="relative">
          <div
            className="w-9 h-9 dark:bg-slate-500  bg-slate-300 rounded-full flex justify-center items-center cursor-pointer font-bold"
            onClick={() => {
              handelDropdown("login");
            }}
          >
            YS
          </div>
          {showLogin && (
            <div
              className="absolute w-24 h-12 rounded-lg  dark:bg-slate-500  bg-slate-300 right-0 top-[110%] flex justify-center items-center cursor-pointer z-10 hover:bg-slate-700  hover:dark:bg-slate-700 hover:text-white"
              onClick={() => {
                handelDropdown("login");
              }}
            >
              Sign-out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
