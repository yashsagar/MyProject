import { useSelector, useDispatch } from "react-redux";
import { handalLoginDropdown, handalThemeDropdown } from "../backend";

const useDropdown = () => {
  const dispatch = useDispatch();
  const themDropdown = useSelector((state) => state.theme.dropdown);
  const loginDropdown = useSelector((state) => state.login.dropdown);
  return (state) => {
    if (state === "login") {
      if (loginDropdown) {
        dispatch(handalLoginDropdown(false));
      } else {
        dispatch(handalLoginDropdown(true));
        dispatch(handalThemeDropdown(false));
      }
    }
    if (state === "theme") {
      if (themDropdown) {
        dispatch(handalThemeDropdown(false));
      } else {
        dispatch(handalThemeDropdown(true));
        dispatch(handalLoginDropdown(false));
      }
    }
  };
};

export { useDropdown };
