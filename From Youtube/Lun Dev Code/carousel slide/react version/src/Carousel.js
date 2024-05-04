import CarouselItem from "./CarouselItem";
import image1 from "../resources/image/img1.jpg";
import image2 from "../resources/image/img2.jpg";
import image3 from "../resources/image/img3.jpg";
import image4 from "../resources/image/img4.jpg";
import ThumbnailItem from "./ThumbnailItem";

export default function Carousel() {
  return (
    <div className="wrapper next">
      <div className="carousel-list">
        <CarouselItem image={image1} />
        <CarouselItem image={image2} />
        <CarouselItem image={image3} />
        <CarouselItem image={image4} />
      </div>
      <div className="thumbnail-list">
        <ThumbnailItem
          image={image2}
          projectName="project 1"
          projectCategory="Carousel"
        />
        <ThumbnailItem
          image={image3}
          projectName="project 1"
          projectCategory="Carousel"
        />
        <ThumbnailItem
          image={image4}
          projectName="project 1"
          projectCategory="Carousel"
        />
        <ThumbnailItem
          image={image1}
          projectName="project 1"
          projectCategory="Carousel"
        />
      </div>
    </div>
  );
}
