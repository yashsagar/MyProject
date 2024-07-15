import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import App from "./App";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/project" element={<div>project</div>} />
      <Route path="/about" element={<div>about me</div>} />
    </Route>
  )
);
