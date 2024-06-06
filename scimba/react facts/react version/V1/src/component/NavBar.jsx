const NavBar = ({ mode, setMode }) => {
  function toggleMode() {
    console.log("clicked");
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <nav className=" dark:bg-black border-b-2 border-black/20 h-16">
      <div className="flex justify-between main-wrapper py-4">
        <div className="flex gap-2 items-center">
          <div>
            <img src="/images/react-icon.png" alt="rect icon" />
          </div>
          <p className="text-[#00abca] text-2xl font-bold">ReaactFacts</p>
        </div>
        <div className="flex gap-2 font-semibold items-center dark:text-white">
          <p>Light</p>
          <div
            className="bg-black rounded-full w-7 h-4 flex justify-start dark:justify-end dark:bg-white cursor-pointer"
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
