const buttonsDOM = document.querySelector(".arrow");
const carsouselDOM = document.querySelector(".carousel");

buttonsDOM.addEventListener("click", (e) => {
  const value = e.target.dataset.btnValue;
  if (value) {
    runChange(value);
  }
});

function runChange(btnValaue) {
  const carouselItemDOM = document.querySelectorAll(".carousel__item");
  const carouselListDOM = document.querySelector(".carousel__list");
  const thumbnailItemDOM = document.querySelectorAll(".thumbnail__item");
  const thumbnailListDOM = document.querySelector(".thumbnail");
  const lastItem = carouselItemDOM.length - 1;

  if (btnValaue === "next") {
    carsouselDOM.classList.add("next");
    carouselListDOM.appendChild(carouselItemDOM[0]);
    thumbnailListDOM.appendChild(thumbnailItemDOM[0]);
  } else if (btnValaue === "prev") {
    carsouselDOM.classList.add("prev");
    carouselListDOM.prepend(carouselItemDOM[lastItem]);
    thumbnailListDOM.prepend(thumbnailItemDOM[lastItem]);
  }
  let clearClass;
  clearTimeout(clearClass);
  clearClass = setTimeout(() => {
    carsouselDOM.classList.remove("prev");
    carsouselDOM.classList.remove("next");
  }, 3000);
}
