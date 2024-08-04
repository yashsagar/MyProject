import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./index.css";

//import pages
import App from "./App.jsx";
import SignIn from "./page/SignIn.jsx";
import LoginSuccessMessage from "./page/LoginSuccessMessage.jsx";

//import components
import Test from "./component/Test.jsx";

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
        path="/LoginSuccessMessage"
        element={<LoginSuccessMessage />}
      ></Route>
      <Route path="/test" element={<LoginSuccessMessage />}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
