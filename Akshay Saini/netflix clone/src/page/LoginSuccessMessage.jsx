import { Link } from "react-router-dom";

const LoginSuccessMessage = () => {
  return (
    <div className=" absolute inset-0 bg-black text-white flex justify-center items-center flex-col gap-4 text-center">
      <p className="text-5xl">Sing Up success</p>
      <Link to="/signin">
        <p className="cursor-pointer">
          <span className="text-blue-500">Click here</span> to login
        </p>
      </Link>
    </div>
  );
};

export default LoginSuccessMessage;
