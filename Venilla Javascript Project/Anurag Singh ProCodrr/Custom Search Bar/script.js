const closeIcon = document.querySelector(".search-close-icon");
const inputtext = document.querySelector(".serch-input");
const seggestionMenu = document.querySelector(".suggestion-wrapper");

closeIcon.addEventListener("click", () => {
  inputtext.value = "";
  closeIcon.style.display = "none";
  seggestionMenu.style.display = "none";
});

inputtext.addEventListener("click", () => {
  closeIcon.style.display = "block";
  seggestionMenu.style.display = "block";
});

inputtext.addEventListener("blur", () => {
  seggestionMenu.style.display = "none";
  setTimeout(() => {
    closeIcon.style.display = "none";
  }, 200);
});
