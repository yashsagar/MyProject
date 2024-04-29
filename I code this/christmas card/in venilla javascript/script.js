const wrapperEl = document.querySelector(".wrapper");
const closeBtn = document.querySelector(".close-btn");
const giftEl = document.querySelector(".card-btn");

closeBtn.addEventListener("click", (e) => {
  wrapperEl.classList.add("hidden");
  setTimeout(() => {
    wrapperEl.classList.remove("hidden");
  }, 3000);
});

function addSnow() {
  let snow = document.createElement("div");
  snow.classList.add("snow");
  snow.style.left = Math.random() * window.innerWidth - 30 + "px";
  document.body.appendChild(snow);
  snow.style.animationDelay = Math.random() * 3 + "s";
}

giftEl.addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
    addSnow();
  }
  setTimeout(() => {
    let snowlist = document.querySelectorAll(".snow");
    for (let i = 0; i < snowlist.length; i++) {
      snowlist[i].remove();
    }
  }, 10000);
});
