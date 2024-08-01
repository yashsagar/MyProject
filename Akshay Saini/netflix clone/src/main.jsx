import ReactDOM from "react-dom/client";
import "./index.css";

//import pages
import App from "./App.jsx";
import SignIn from "./page/SignIn.jsx";

//import components

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route
        path="/test"
        element={
          <div className="border-2 border-pink-700 h-10 w-full text-lg">
            <input type="text" {...{ name: "yash" }} />
          </div>
        }
      ></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
