import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { manageUser } from "../../backend";

// component import
import Footer from "../component/Footer";
import Header from "../component/Header";
import SectionSeparetor from "../component/SectionSeparetor";
import Input from "../component/input/Input";
import { validation } from "../utils/validation";

//utils import
import { signinFooterList as linkList } from "../utils/linkList";

const SignIn = () => {
  //hooks
  const [formState, SetformState] = useState({
    displayName: false,
    dispalyEmail: true,
    dispalyPassword: true,
  });

  const [isvalidated, setIsvalidated] = useState({
    isNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
  });

  const nameEl = useRef(null);
  const emailEl = useRef(null);
  const passwordEl = useRef(null);
  const signinWrapper = useRef(null);

  const navigate = useNavigate();

  //function
  function handeloginMode() {
    SetformState((prevState) => ({
      displayName: false,
      dispalyEmail: true,
      dispalyPassword: !prevState.dispalyPassword,
    }));
  }

  function handelSigninMode() {
    SetformState((prevState) => ({
      isSignUpForm: !prevState.isSignUpForm,
      dispalyEmail: true,
      dispalyPassword: true,
    }));
  }

  function handelSubmit(event) {
    event.preventDefault();
    let userName = "";
    if (formState.isSignUpForm) {
      userName = nameEl.current.value;
    }
    const email = emailEl.current.value;
    const password = passwordEl.current.value;
    const validatedData = validation({ userName, email, password });

    if (validatedData === "true") {
      console.log(signinWrapper.current.style.pointerEvents);
      signinWrapper.current.style.pointerEvents = "none";
      console.log(signinWrapper.current.style.pointerEvents);
      manageUser({
        type: "add",
        load: { name: userName, email, password },
      })
        .then(() => {
          navigate("/LoginSuccessMessage");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setIsvalidated(validatedData);
    }
  }

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
            {formState.isSignUpForm && (
              <>
                <div className="border-2 border-[#646363] rounded h-14 w-full text-lg mb-4">
                  <Input
                    id="name"
                    inputStyle={{ color: "white" }}
                    attribute={{ type: "text", name: "name", ref: nameEl }}
                  >
                    Name
                  </Input>
                </div>
                {formState.isSignUpForm && !isvalidated.isNameValid && (
                  <p className="px-3 pb-4 text-sm text-red-400 -mt-4 ">
                    name must be three digit and not contain any special
                    character
                  </p>
                )}
              </>
            )}
            <div className="border-2 border-[#646363] rounded h-14 w-full text-lg mb-4">
              <Input
                attribute={{
                  name: "email",
                  type: "email",
                  ref: emailEl,
                }}
                inputStyle={{ color: "white" }}
                id="email"
              >
                Email
              </Input>
            </div>
            {!isvalidated.isEmailValid && (
              <p className="px-3 pb-4 text-sm text-red-400 -mt-4 ">
                please check the email or phone number is correct
              </p>
            )}
            {formState.dispalyPassword ? (
              <>
                <div className="border-2 border-[#646363] rounded h-14 w-full text-lg mb-4">
                  <Input
                    id="password"
                    inputStyle={{ color: "white" }}
                    attribute={{
                      type: "password",
                      name: "password",
                      ref: passwordEl,
                    }}
                  >
                    Password
                  </Input>
                </div>
                {formState.isSignUpForm && !isvalidated.isPasswordValid && (
                  <p className="px-3 pb-4 text-sm text-red-400 -mt-4 ">
                    Password must contain one digit from 1 to 9, one lowercase
                    letter, one uppercase letter, one special character, no
                    space, and it must be 8-16 characters long.
                  </p>
                )}
              </>
            ) : (
              <p className="text-col-text-secondery text-sm mb-4 text-center">
                Message and data rates may apply
              </p>
            )}
            <button
              onClick={handelSubmit}
              ref={signinWrapper}
              className="bg-col-bg-accent w-full text-lg  font-medium py-2 rounded hover:bg-col-bg-accent-hover"
            >
              {formState.dispalyPassword ? "Sign In" : "Send sign-in code"}
            </button>
            {!formState.isSignUpForm && (
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
                    : "Forgot email ?"}
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
              {formState.isSignUpForm
                ? "Already registered? "
                : "New to Netflix? "}
              {/* <span className="cursor-pointer text-white hover:underline">
                <Link to="/"> Sign up now.</Link>
              </span> */}
              <span
                onClick={handelSigninMode}
                className="cursor-pointer text-white hover:underline"
              >
                {formState.isSignUpForm ? "Sign Up now " : "Sign In now."}
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
