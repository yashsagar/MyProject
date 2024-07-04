import { useSelector, useDispatch } from "react-redux";
import { updateDropdown, updateMood } from "../backend/dropdownSlice";

const ThemeDropdown = () => {
  const showMode = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handelMode = (mood) => {
    let moodValue = mood;
    let classList = document.documentElement.classList;

    if (mood === "os") {
      dispatch(updateMood("os"));
      if (matchMedia("(prefers-color-scheme:dark)").matches) {
        moodValue = "dark";
      } else {
        moodValue = "light";
      }
    }

    classList.remove(...classList);
    classList.add(moodValue);

    dispatch(updateDropdown(false));
  };

  return (
    showMode && (
      <div className="absolute top-[130%] -right-1 w-28  bg-slate-500 rounded-lg p-2 flex flex-col justify-around z-10">
        <div
          onClick={() => {
            handelMode("light");
            dispatch(updateMood("light"));
            localStorage.setItem("mood", "light");
          }}
          className="hover:bg-black/80 p-2 rounded-md"
        >
          Light
        </div>
        <div
          onClick={() => {
            handelMode("dark");
            dispatch(updateMood("dark"));
            localStorage.setItem("mood", "dark");
          }}
          className="hover:bg-black/80 p-2 rounded-md"
        >
          Dark
        </div>
        <div
          onClick={() => {
            handelMode("os");
            dispatch(updateMood("os"));
            localStorage.setItem("mood", "os");
          }}
          className="hover:bg-black/80 p-2 rounded-md"
        >
          OS Defalut
        </div>
      </div>
    )
  );
};

export default ThemeDropdown;
