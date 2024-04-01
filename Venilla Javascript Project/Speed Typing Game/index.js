const quoteDisplayElement = document.querySelector(".quoteText");
const quoteInputElement = document.querySelector(".quoteInput");
const timer = document.querySelector(".timer");

// fetching and displaying text from AIP
function getQuote() {
  return fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => data.content);
}
async function renderNewQuote() {
  const quote = await getQuote();
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
  startTimer();
}
renderNewQuote();

// collecting typed input and compare for quote

quoteInputElement.addEventListener("input", () => {
  const spancollection = quoteDisplayElement.querySelectorAll("span");
  const inputCharectcore = quoteInputElement.value.split("");
  let correct = true;
  spancollection.forEach((char, index) => {
    if (inputCharectcore[index] == null) {
      spancollection[index].classList.remove("incorrect");
      spancollection[index].classList.remove("correct");
      correct = false;
    } else if (char.textContent === inputCharectcore[index]) {
      spancollection[index].classList.remove("incorrect");
      spancollection[index].classList.add("correct");
    } else {
      spancollection[index].classList.add("incorrect");
      spancollection[index].classList.remove("correct");
      correct = false;
    }
  });
  if (correct) renderNewQuote();
});

let startTime;

function startTimer() {
  timer.textContent = 0;
  startTime = new Date();
  setInterval(() => {
    timer.textContent = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}
