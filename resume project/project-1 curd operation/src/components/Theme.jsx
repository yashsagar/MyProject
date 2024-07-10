import { useSelector } from "react-redux";
import ThemeDropdown from "./ThemeDropdown";

const Theme = () => {
  const themeType = useSelector((state) => state.theme.theme);
  const themeDropdown = useSelector((state) => state.theme.dropdown);

  switch (themeType) {
    case "light":
      return (
        <div className="relative">
          <img
            id="test-color"
            className="w-full h-full p-1 "
            src="./image/sun-light.svg"
          />
          {themeDropdown && <ThemeDropdown />}
        </div>
      );

    case "dark":
      return (
        <div className="relative">
          <img
            id="test-color"
            className="w-full h-full p-1"
            src="./image/moon-dark.svg"
          />
          {themeDropdown && <ThemeDropdown />}
        </div>
      );

    case "os":
      return (
        <div className="relative">
          <img
            id="test-color"
            className="w-full h-full p-1"
            src="./image/os-default.svg"
          />
          {themeDropdown && <ThemeDropdown />}
        </div>
      );
  }
};

export default Theme;
