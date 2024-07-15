import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./backend";
import { Provider } from "react-redux";
import { routes } from "./route";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </Provider>
);
