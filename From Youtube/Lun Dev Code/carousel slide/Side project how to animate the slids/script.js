const buttonsEl = document.querySelector(".buttons");
const wrapperEl = document.querySelector(".wrapper");
let autoRun = setInterval(() => {
  run("next");
}, 1000);

function run(value) {
  const carouselItemsListEl = document.querySelectorAll(".carousel .items");
  const tumbnailItemsListEl = document.querySelectorAll(
    ".items-wrapper .items"
  );
  const carouselEl = document.querySelector(".carousel");
  const tumbnailEl = document.querySelector(".items-wrapper");

  const lastItem = carouselItemsListEl.length - 1;

  if (value === "next") {
    carouselEl.appendChild(carouselItemsListEl[0]);
    tumbnailEl.appendChild(tumbnailItemsListEl[0]);
  } else if (value === "prev") {
    carouselEl.prepend(carouselItemsListEl[lastItem]);
    tumbnailEl.prepend(tumbnailItemsListEl[lastItem]);
  }
  wrapperEl.classList.add(value);

  setTimeout(() => {
    wrapperEl.classList.remove("next");
    wrapperEl.classList.remove("prev");
  }, 1000);

  clearInterval(autoRun);
  autoRun = setInterval(() => {
    run("next");
  }, 6000);
}

buttonsEl.addEventListener("click", (e) => {
  const dataValue = e.target.dataset.btnValue;
  if (dataValue) {
    run(dataValue);
  }
});
