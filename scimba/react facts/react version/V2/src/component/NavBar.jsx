const NavBar = ({ mode, setMode }) => {
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  }

  return (
    <nav className=" bg-bg-color border-b-2 border-black/20 h-16">
      <div className="flex justify-between main-wrapper py-4">
        <div className="flex gap-2 items-center">
          <div>
            <img src="/images/react-icon.png" alt="rect icon" />
          </div>
          <p className="text-[#00abca] text-2xl font-bold">ReaactFacts</p>
        </div>
        <div className="flex gap-2 font-semibold items-center text-text-color">
          <p>Light</p>
          <div
            className="bg-text-color rounded-full w-7 h-4 flex justify-start dark:justify-end  cursor-pointer"
            onClick={toggleMode}
          >
            <div className="bg-white rounded-full w-4 h-4 border border-black dark:bg-black dark:border-white"></div>
          </div>
          <p>Dark</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
