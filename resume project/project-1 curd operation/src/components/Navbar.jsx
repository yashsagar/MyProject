import { NavLink, Link } from "react-router-dom";
import { updateDropdown } from "../backend/dropdownSlice";
import { useSelector, useDispatch } from "react-redux";
import Theme from "./Theme";

const Navbar = () => {
  const showLogin = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const active = ({ isActive }) =>
    isActive ? "text-red-400 border-b border-color-text-green" : "";

  return (
    <div className=" flex justify-between pt-4 items-center main-wrapper">
      <div className="text-3xl pb-2 cursor-pointer">
        <Link to="/">
          Yash
          <span className="bg-color-text-green text-2xl w-2 h-2 rounded inline-block ml-2 "></span>
        </Link>
      </div>
      <ul className="flex gap-4">
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
        <div className="w-9 h-9 bg-slate-500 rounded-full flex justify-center items-center cursor-pointer">
          <Theme />
        </div>
        <div className="relative">
          <div
            className="w-9 h-9 bg-slate-500 rounded-full flex justify-center items-center cursor-pointer "
            onClick={() => {
              dispatch(updateDropdown("login"));
            }}
          >
            YS
          </div>
          {showLogin && (
            <div
              className="absolute w-24 h-12 rounded-lg bg-slate-500 right-0 top-[110%] flex justify-center items-center cursor-pointer z-10"
              onClick={() => {
                dispatch(updateDropdown("login"));
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
