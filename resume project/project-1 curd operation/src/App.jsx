import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// layout import
import MainLayout from "./layout/MainLayout";
import TaskLayout from "./layout/TaskLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<TaskLayout />}>
        <Route path=":taskId" element={<div>task details</div>} />
      </Route>
      <Route path="/about" element={<div>about</div>} />
      <Route path="/contact" element={<div>contact</div>} />
      <Route path="*" element={<div>error</div>} />
    </Route>
  )
);

function App() {
  const themecolor = useSelector((state) => state.theme.themeColor);
  useEffect(() => {
    const classList = document.documentElement.classList;
    if (themecolor === "dark") {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
  }, [themecolor]);

  return (
    <div className="bg-color-primary text-color-text min-h-screen font-roboto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
