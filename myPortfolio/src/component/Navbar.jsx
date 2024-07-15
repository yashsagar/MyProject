import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme, useDropdown } from "../hooks";

const Navbar = () => {
  const dropDown = useSelector((state) => state.theme.dropdown);
  const theme = useSelector((state) => state.theme.theme);
  const handelDropdown = useDropdown();
  const handelTheme = useTheme();

  const themeIcon = () => {
    switch (theme) {
      case "light":
        return (
          <img
            className="svg cursor-pointer"
            src="./images/sun-light.svg"
            alt="light mood icon"
          />
        );

      case "dark":
        return (
          <img
            className="svg cursor-pointer"
            src="./images/moon-dark.svg"
            alt="dark mood icon"
          />
        );

      case "os":
        return (
          <img
            className="svg cursor-pointer"
            src="./images/os-default.svg"
            alt="os mood icon"
          />
        );
    }
  };

  function active(isAction) {
    return isAction ? " border-b-[2.5px] border-color-bg-accent pb-0.5 " : "";
  }

  return (
    <div className="main-wrapper py-2 flex justify-between items-center ">
      <div className="cursor-pointer">
        <NavLink to="/">
          <span className="text-4xl font-bold tracking-tighter inline-block pb-3">
            Yash
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-color-bg-accent ml-2"></span>
        </NavLink>
      </div>
      <nav className="flex gap-x-4 font-semibold">
        <div>
          <NavLink to={"/"} className={({ isActive }) => active(isActive)}>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/project"}
            className={({ isActive }) => active(isActive)}
          >
            Project
          </NavLink>
        </div>
        <div>
          <NavLink to={"/about"} className={({ isActive }) => active(isActive)}>
            About Us
          </NavLink>
        </div>
      </nav>
      <div className="relative" onClick={handelDropdown}>
        <div>{themeIcon()}</div>
        {dropDown && (
          <div className=" absolute right-0 px-2 py-2  bg-slate-400 rounded-md mt-1">
            <div
              className="px-4 py-0.5 cursor-pointer hover:text-color-text-hover hover:bg-color-bg-hover hover:rounded-md"
              onClick={() => {
                handelTheme("light");
              }}
            >
              light
            </div>
            <div
              className="px-4 py-0.5 cursor-pointer hover:text-color-text-hover hover:bg-color-bg-hover hover:rounded-md"
              onClick={() => {
                handelTheme("dark");
              }}
            >
              Dark
            </div>
            <div
              className="px-4 py-0.5 cursor-pointer hover:text-color-text-hover hover:bg-color-bg-hover hover:rounded-md "
              onClick={() => {
                handelTheme("os");
              }}
            >
              OS
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
