const Navbar = () => {
  return (
    <nav className="main-wrapper">
      <div className="flex justify-end gap-5 pt-2 text-[12px] cursor-pointer">
        <div>Help</div>
        <div>Orders & Returns</div>
        <div>Hi, John</div>
      </div>
      <div className="flex justify-between items-end relative">
        <div className="text-3xl font-bold cursor-pointer">ECOMMERCE</div>
        <div className="flex font-semibold gap-6 cursor-pointer absolute-center">
          <div>Categories</div>
          <div>Sale</div>
          <div>Clearance</div>
          <div>New stock</div>
          <div>Trending</div>
        </div>
        <div className="flex gap-6 cursor-pointer">
          <img src="./icons/search-icon.svg" alt="search icon" />
          <img src="./icons/cart-icon.svg" alt="card icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
