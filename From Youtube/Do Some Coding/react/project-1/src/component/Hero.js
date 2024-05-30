const Hero = () => {
  return (
    <main className="wrapper">
      <div className="content-wrapper ">
        <h1 className="title">YOUR FEET DESERVE THE BEST</h1>
        <p className="description">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btn-wrapper">
          <button className="btn-shop">Shop Now</button>
          <button className="btn-category">Category</button>
        </div>
        <p className="link-title">Also Available On</p>
        <div className="links-wrapper">
          <img
            className="flip-kart-icon"
            src={require("../../public/images/flipcard-icon.png")}
            alt="flip-kart-icon"
          />
          <img
            className="amazon-icon"
            src={require("../../public/images/amazon-icon.png")}
            alt="amazon-icon"
          />
        </div>
      </div>
      <div className="img-wrapper ">
        <img
          className="hero-img"
          src={require("../../public/images/nike-shoe.webp")}
          alt="nike shoe"
        />
      </div>
    </main>
  );
};

export default Hero;
