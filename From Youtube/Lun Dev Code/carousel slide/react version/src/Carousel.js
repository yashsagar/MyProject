import CarouselItem from "./CarouselItem";
import image1 from "../resources/image/img1.jpg";
import image2 from "../resources/image/img2.jpg";
import image3 from "../resources/image/img3.jpg";
import image4 from "../resources/image/img4.jpg";
import ThumbnailItem from "./ThumbnailItem";
import { useState } from "react";
// import ReactDOM from "react-dom/client";

export default function Carousel() {
  const carouselItemListDOM = document.querySelectorAll(".carousel-item");
  const carouselThumbnailListDOM = document.querySelectorAll(".thumbnail-item");
  const [carouselItemList, setCarouselItemList] = useState(carouselItemListDOM);
  // const [thumbnailList, setthumbnailList] = useState(carouselThumbnailListDOM);
  // const arrowButtons = document.querySelector(".arrow-btn-wrapper");
  // console.log(arrowButtons);
  // arrowButtons.addEventListener("click", (e) => {
  //   const value = e.target.dataset.btnValue;
  //   if (value) {
  //     console.log("test");
  //   }
  // });

  function test(val) {
    console.log(val);
  }

  return (
    <div className="wrapper">
      <div className="carousel-list">
        <CarouselItem image={image1} desingBy=" lun dev code 1" />
        <CarouselItem image={image2} desingBy=" lun dev code 2" />
        <CarouselItem image={image3} desingBy=" lun dev code 3" />
        <CarouselItem image={image4} desingBy=" lun dev code 4" />
      </div>
      <div className="thumbnail-list">
        <ThumbnailItem
          image={image2}
          projectName="project 2"
          projectCategory="Carousel"
        />
        <ThumbnailItem
          image={image3}
          projectName="project 3"
          projectCategory="Carousel"
        />
        <ThumbnailItem
          image={image4}
          projectName="project 4"
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
