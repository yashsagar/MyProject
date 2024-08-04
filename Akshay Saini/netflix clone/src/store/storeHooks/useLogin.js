import { useDispatch } from "react-redux";
import { loginState } from "../loginSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  return (load = false) => {
    dispatch(loginState({ load }));
  };
};
