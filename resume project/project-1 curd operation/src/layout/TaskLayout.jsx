import { Outlet } from "react-router-dom";

const TaskLayout = () => {
  return (
    <div className="flex gap-48  ">
      <div className="px-2 dark:bg-red-500"> side task</div>
      <Outlet />
    </div>
  );
};

export default TaskLayout;
