export default function CarouselItem({ image }) {
  return (
    <div className="carousel-item">
      <img src={image} alt="backgrount image" />
      <div className="content-wrapper">
        <div className="text-wrpper">
          <div className="title">This design inspired by </div>
          <div className="author">lun dev code</div>
        </div>
        <div className="button-wrapper">
          <button className="more">more</button>
          <button className="sourceCode">source code</button>
        </div>
      </div>
    </div>
  );
}
