import { useDispatch, useSelector } from "react-redux";
import { updateDropdown } from "../backend/dropdownSlice";

import ThemeDropdown from "./ThemeDropdown";

const Theme = () => {
  const mode = useSelector((state) => state.mood);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  switch (mode) {
    case "light":
      return (
        <div className="relative">
          <img
            className="w-full h-full p-1"
            src="./image/sun-light.svg"
            onClick={() => {
              dispatch(updateDropdown("theme"));
            }}
          />
          {theme && <ThemeDropdown />}
        </div>
      );

    case "dark":
      return (
        <div className="relative">
          <img
            className="w-full h-full p-1"
            src="./image/moon-dark.svg"
            onClick={() => {
              dispatch(updateDropdown("theme"));
            }}
          />
          {theme && <ThemeDropdown />}
        </div>
      );

    case "os":
      return (
        <div className="relative">
          <img
            className="w-full h-full p-1"
            src="./image/os-default.svg"
            onClick={() => {
              dispatch(updateDropdown("theme"));
            }}
          />
          {theme && <ThemeDropdown />}
        </div>
      );
  }
};

export default Theme;
