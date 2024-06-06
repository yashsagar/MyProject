const MainBody = () => {
  return (
    <div className="dark:bg-black/85 min-h-screen flow-root">
      <div className="main-wrapper dark:text-white">
        <h2 className="mt-16 text-6xl font-bold mb-12 tracking-tighter pl-2 ">
          Fun facts about React
        </h2>
        <ul className="pl-12 space-y-2 text-lg ">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      <img
        className="absolute right-0 w-52 top-1/4  opacity-20 pointer-events-none -z-10 "
        src="./images/react-bg-img.svg"
        alt="react background image"
      />
    </div>
  );
};

export default MainBody;
