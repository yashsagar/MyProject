const gridDataEl = document.getElementById("gridData");
const startBtn = document.getElementById("start");
const randamBtn = document.getElementById("randam");
const clearBtn = document.getElementById("clear");

function generateGrid() {
  return new Array(30).fill(0).map((row) => {
    return new Array(30).fill(0);
  });
}

let grid = generateGrid();

function randam(event) {
  event.stopPropagation();
  for (let r = 0; r < 30; r++) {
    for (let c = 0; c < 30; c++) {
      const randamValue = Math.floor(Math.random() * 5);
      if (randamValue < 2) {
        grid[r][c] = randamValue;
      }
    }
  }
  dispalyGridData();
}

function dispalyGridData() {
  const fragment = new DocumentFragment();
  for (let r = 0; r < 30; r++) {
    for (let c = 0; c < 30; c++) {
      const div = document.createElement("div");
      div.style.border = "1px solid rgba(0,0,0, 0.2";
      div.style.cursor = "pointer";
      div.dataset.colomn = `${c}`;
      div.dataset.row = `${r}`;
      if (grid[r][c] === 1) {
        div.style.backgroundColor = "rgba(0, 251, 25, 0.6)";
      }
      fragment.append(div);
    }
  }

  if (gridDataEl.firstChild) {
    gridDataEl.innerText = "";
    gridDataEl.appendChild(fragment);
  } else {
    gridDataEl.appendChild(fragment);
  }
}
dispalyGridData();

document.addEventListener("click", (event) => {
  const col = Number(event.target.dataset.colomn);
  const row = Number(event.target.dataset.row);

  if (grid[row][col] === 1) {
    grid[row][col] = 0;
    event.target.style.backgroundColor = "azure";
  } else {
    grid[row][col] = 1;
    event.target.style.backgroundColor = "rgba(0, 251, 25, 0.6)";
  }
});

function nextGeneration() {
  const nextGen = generateGrid();
  let Neighbor = (row, col) => {
    let state = grid[row][col];
    let totalNeighbor = state ? -1 : 0;

    for (let r = -1; r < 2; r++) {
      for (let c = -1; c < 2; c++) {
        let rowCalculation = (row + 30 + r) % 30;
        let colCalculation = (col + 30 + c) % 30;
        totalNeighbor += grid[rowCalculation][colCalculation];
      }
    }

    if (state == 0 && totalNeighbor == 3) {
      nextGen[row][col] = 1;
    } else if (state == 1 && (totalNeighbor < 2 || totalNeighbor > 3)) {
      nextGen[row][col] = 0;
    } else {
      nextGen[row][col] = state;
    }
  };

  for (let r = 0; r < 30; r++) {
    for (let c = 0; c < 30; c++) {
      Neighbor(r, c);
    }
  }

  grid = nextGen;
}

let interval;

startBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  clearInterval(interval);
  interval = setInterval(() => {
    nextGeneration();
    dispalyGridData();
  }, 1000);

  if (event.target.innerText === "Start") {
    event.target.innerText = "Stop";
  } else {
    event.target.innerText = "Start";
    clearInterval(interval);
  }
});

randamBtn.addEventListener("click", (event) => {
  randam(event);
});

clearBtn.addEventListener("click", () => {
  clearInterval(interval);
  grid = generateGrid();
  dispalyGridData();
});
