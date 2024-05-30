const Nav = () => {
  return (
    <nav className="main-nav wrapper">
      <img
        className="logo"
        src={require("../../public/Images/nike-icon.png")}
        alt="logo"
      />
      <ul>
        <li>menu</li>
        <li>location</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <button className="btn-login">login</button>
    </nav>
  );
};

export default Nav;
