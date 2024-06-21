import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("dark") || "light");

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  function changeMode() {
    const changedMode = mode === "dark" ? "light" : "dark";
    setMode(changedMode);
    localStorage.setItem("mode", changedMode);
  }

  return (
    <div className="bg-black py-8 min-h-screen">
      <div className="main-wrapper relative bg-color-bg py-8 px-24">
        <div className="absolute right-1 top-1">
          <img
            onClick={changeMode}
            src={mode === "dark" ? "./images/dark.svg" : "./images/light.svg"}
            alt="mode icons"
          />
        </div>

        {/* card */}
        <div className="rounded-2xl overflow-hidden bg-color-card-bg  ">
          {/* <div className="h-1/2">
            <img
              src="./images/profile.jpg"
              alt="profile img"
              className=" w-full h-full object-cover "
            />
          </div> */}

          <div className="">
            <div id="left" className="">
              <img src="./images/profile.jpg" alt="profile img" />
            </div>

            <div id="right" className="">
              <img src="./images/profile.jpg" alt="profile img" />
            </div>
          </div>

          <p className="text-color-text-primary"> yash sagar</p>
        </div>
      </div>
    </div>
  );
}

export default App;
