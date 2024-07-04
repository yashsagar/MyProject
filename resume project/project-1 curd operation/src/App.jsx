import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

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
  return (
    <div className="bg-color-primary text-white min-h-screen font-roboto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
