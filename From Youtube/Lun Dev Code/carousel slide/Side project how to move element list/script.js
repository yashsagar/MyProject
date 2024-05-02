const buttonsEl = document.querySelector(".buttons");

function run(value) {
  const carouselItemsListEl = document.querySelectorAll(".carousel .items");
  const tumbnailItemsListEl = document.querySelectorAll(".tumbnail .items");
  const carouselEl = document.querySelector(".carousel");
  const tumbnailEl = document.querySelector(".tumbnail");

  carouselEl.classList.add(value);
  const lastItem = carouselItemsListEl.length - 1;
  // autoRun();

  if (value === "next") {
    carouselEl.appendChild(carouselItemsListEl[0]);
    tumbnailEl.appendChild(tumbnailItemsListEl[0]);
  } else if (value === "prev") {
    carouselEl.prepend(carouselItemsListEl[lastItem]);
    tumbnailEl.prepend(tumbnailItemsListEl[lastItem]);
  }
}

buttonsEl.addEventListener("click", (e) => {
  const dataValue = e.target.dataset.btnValue;
  if (dataValue) {
    run(dataValue);
  }
});

// let settime = setInterval(() => {
//   run("next");
//   console.log("set time out run");
// }, 3000);

// function autoRun() {
//   clearInterval(settime);
//   settime = setInterval(() => {
//     run("next");
//     console.log("set time out run from function");
//   }, 3000);
// }

// console.log(document.querySelectorAll(".carousel-items"));
