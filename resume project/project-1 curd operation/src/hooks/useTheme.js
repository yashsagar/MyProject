import { useDispatch } from "react-redux";
import { handalTheme } from "../backend";

export const useTheme = () => {
  const dispatch = useDispatch();
  const themHandel = (theme) => {
    dispatch(handalTheme(theme));
  };

  return { themHandel };
};
