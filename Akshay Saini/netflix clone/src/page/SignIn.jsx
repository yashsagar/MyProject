// component import
import Footer from "../component/Footer";
import Header from "../component/Header";
import SectionSeparetor from "../component/SectionSeparetor";
import Input from "../component/input/Input";

//utils import
import { signinFooterList as linkList } from "../utils/linkList";
import { useEffect, useRef, useState } from "react";

const SignIn = () => {
  const [formState, SetformState] = useState({
    displayName: false,
    dispalyEmail: true,
    dispalyPassword: true,
  });

  function handeloginMode() {
    SetformState((prevState) => ({
      displayName: false,
      dispalyEmail: true,
      dispalyPassword: !prevState.dispalyPassword,
    }));
  }

  function handelSigninMode() {
    SetformState((prevState) => ({
      isSignUp: !prevState.isSignUp,
      dispalyEmail: true,
      dispalyPassword: true,
    }));
  }

  const reftest = useRef(null);
  useEffect(() => {
    console.log(reftest.current.value);
  }, []);

  return (
    <>
      <div className="sm:background-img sm:bg-gradient-to-b sm:from-black/80 from-10% sm:via-transparent/50 sm:to-black/95 sm:to-100% sm:h-full sm:w-full sm:bg-transparent  text-white bg-black pb-1 relative ">
        <div className="main-wrapper">
          <Header type={"signin"} />
        </div>
        {/* main body */}
        <div className=" main-wrapper bg-black/70 sm:max-w-[500px] sm:mt-4 mb:10 sm:mb-20 lg:mb-28 sm:drop-shadow-wh ">
          <form className="sm:pt-12 sm:px-16">
            <p className="text-4xl font-bold mb-9"> Sign In</p>
            {formState.isSignUp && (
              <div className="border-2 border-[#646363] rounded h-14 w-full text-lg mb-4">
                <Input
                  id="name"
                  inputStyle={{ color: "white" }}
                  attribute={{ type: "text", name: "name" }}
                >
                  Name
                </Input>
              </div>
            )}
            <div className="border-2 border-[#646363] rounded h-14 w-full text-lg mb-4">
              <Input
                attribute={{
                  name: "email",
                  type: "email",
                  ref: reftest,
                }}
                inputStyle={{ color: "white" }}
                id="email"
              >
                Email or mobile number
              </Input>
            </div>
            {formState.dispalyPassword ? (
              <div className="border-2 border-[#646363] rounded h-14 w-full text-lg mb-4">
                <Input
                  id="password"
                  inputStyle={{ color: "white" }}
                  attribute={{ type: "password", name: "password" }}
                >
                  Password
                </Input>
              </div>
            ) : (
              <p className="text-col-text-secondery text-sm mb-4 text-center">
                Message and data rates may apply
              </p>
            )}
            <button className="bg-col-bg-accent w-full text-lg  font-medium py-2 rounded hover:bg-col-bg-accent-hover">
              {formState.dispalyPassword ? "Sign In" : "Send sign-in code"}
            </button>
            {!formState.isSignUp && (
              <>
                <p className="text-lg my-4 text-center text-[#b4b3b3] font-medium">
                  OR
                </p>
                <button
                  className="  bg-[#ffffff]/20 w-full text-lg  font-medium py-[9px] rounded hover:bg-[#ffffff]/25"
                  type="button"
                  onClick={handeloginMode}
                >
                  {formState.dispalyPassword
                    ? "Use a sign-in code"
                    : "Use Password"}
                </button>
                <p className="text-center py-4 text-lg hover:underline hover:text-col-text-secondery cursor-pointer">
                  {formState.dispalyPassword
                    ? "Forgot password?"
                    : "Forgot email or phone number?"}
                </p>
                <div className="flex gap-4 items-center">
                  <input
                    type="checkbox"
                    // checked
                    className="w-5 aspect-square rounded-sm accent-white "
                  />
                  <p>Remember me</p>
                </div>
              </>
            )}
            <p className="py-5 text-col-text-secondery text-lg ">
              {formState.isSignUp ? "Already registered? " : "New to Netflix? "}
              {/* <span className="cursor-pointer text-white hover:underline">
                <Link to="/"> Sign up now.</Link>
              </span> */}
              <span
                onClick={handelSigninMode}
                className="cursor-pointer text-white hover:underline"
              >
                {formState.isSignUp ? "Sign Up now " : "Sign In now."}
              </span>
            </p>
            <p className="pb-8 text-col-text-secondery">
              This page is protected by Google reCAPTCHA to ensure you{"'"}
              not a bot. <span className="text-blue-600">Learn more.</span>
            </p>
          </form>
        </div>
      </div>
      <SectionSeparetor />
      <Footer type="sigin" linkList={linkList} />
    </>
  );
};

export default SignIn;
