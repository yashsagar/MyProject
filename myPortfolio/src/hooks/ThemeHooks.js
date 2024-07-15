import { useDispatch } from "react-redux";
import { updateTheme, updateThemeDropdown } from "../backend";

export function useTheme() {
  const dispatch = useDispatch();

  return (theme) => {
    dispatch(updateTheme(theme));
  };
}

export function useDropdown() {
  const dispatch = useDispatch();

  return () => {
    dispatch(updateThemeDropdown());
  };
}
