import { useSelector, useDispatch } from "react-redux";
import { updateState } from "./backend/store/themeSlice";
function App() {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.theme));

  function callDispatch(mood) {
    dispatch(updateState(mood));
  }

  return (
    <div className="bg-red-500 flex flex-col gap-4 p-4 items-center">
      <button
        className="bg-green-500 px-4 py-2 rounded-md"
        onClick={() => {
          callDispatch("light");
        }}
      >
        light
      </button>
      <button
        className="bg-green-500 px-4 py-2 rounded-md"
        onClick={() => {
          callDispatch("dark");
        }}
      >
        darck
      </button>
      <button
        className="bg-green-500 px-4 py-2 rounded-md"
        onClick={() => {
          callDispatch("os");
        }}
      >
        os
      </button>
    </div>
  );
}

export default App;
