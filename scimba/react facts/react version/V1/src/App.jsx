import { useState, useEffect } from "react";
import NavBar from "./component/NavBar";
import MainBody from "./component/MainBody";

function App() {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return (
    <>
      <NavBar setMode={setMode} mode={mode} />
      <MainBody setMode={setMode} mode={mode} />
    </>
  );
}

export default App;
