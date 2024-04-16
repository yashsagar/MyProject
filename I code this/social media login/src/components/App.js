import react from "react";
import { ICON_LINKS } from "../utils/constant";
import profilePic1 from "../../public/resource/images/pic1.jpg";
import profilePic2 from "../../public/resource/images/pic2.jpg";
import profilePic3 from "../../public/resource/images/pic3.jpg";
import profilePic4 from "../../public/resource/images/pic4.jpg";
import profilePic5 from "../../public/resource/images/pic5.jpg";
import rightArrow from "../../public/resource/images/right-arrow.svg";

export default function App() {
  return (
    <>
      <main className="wrapper">
        <div className="content-wrapper">
          <h2 className="title">Already working together?</h2>
          <div className="text-wrapper">
            <span>Log in to your account and connect with </span>
            <br />
            <span>your teammates!</span>
            <div className="input-wrapper">
              <input
                type="text"
                className="input-text"
                placeholder="youremail@address.com"
              />
              <button className="btn">
                <img src={rightArrow} alt="right arrow icon"></img>
              </button>
            </div>
          </div>
          <div className="border-icon-image-wrapper">
            <div className="icon">
              <img src={profilePic1} alt="proile icon image"></img>
            </div>
            <div className="icon">
              <img src={profilePic2} alt="proile icon image"></img>
            </div>
            <div className="icon">
              <img src={profilePic3} alt="proile icon image"></img>
            </div>
            <div className="icon">
              <img src={profilePic4} alt="proile icon image"></img>
            </div>
            <div className="icon">
              <img src={profilePic5} alt="proile icon image"></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
