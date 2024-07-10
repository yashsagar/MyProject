import { useSelector } from "react-redux";
import { useTheme } from "../hooks";

const ThemeDropdown = () => {
  const { themHandel } = useTheme();
  const dropdown = useSelector((state) => state.theme.dropdown);

  return (
    dropdown && (
      <div className="absolute top-[130%] -right-1 w-28  dark:bg-slate-500  bg-slate-300 rounded-lg p-2 flex flex-col justify-around z-10">
        <div
          onClick={() => {
            themHandel("light");
            localStorage.setItem("mood", "light");
          }}
          className="hover:bg-slate-700 hover:text-white p-2 rounded-md"
        >
          Light
        </div>
        <div
          onClick={() => {
            themHandel("dark");
            localStorage.setItem("mood", "dark");
          }}
          className="hover:bg-slate-700 hover:text-white p-2 rounded-md"
        >
          Dark
        </div>
        <div
          onClick={() => {
            themHandel("os");
            localStorage.setItem("mood", "os");
          }}
          className="hover:bg-slate-700 hover:text-white p-2 rounded-md"
        >
          OS Defalut
        </div>
      </div>
    )
  );
};

export default ThemeDropdown;
