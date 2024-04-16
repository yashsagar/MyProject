import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/BodyComponrnt";
import HeaderComponent from "./components/HeaderComponent";
import Test from "./utils/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <Test />
    </>
  );
};

root.render(<App />);
