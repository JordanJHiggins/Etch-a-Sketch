// Define grid container
const container = document.querySelector(".container");

// Define slider elements
const slider = document.getElementById("myRange");
const output = document.getElementById("output-value");
output.innerHTML = slider.value;

// Define grid items
const cell = document.createElement("div");
cell.classList.add("cell");

let gridSize = 16;

function createGrid(gridSize) {
  let gridDimension = gridSize * gridSize;
  for (i = 0; i < gridDimension; i++) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.insertAdjacentElement("beforeend", cell.cloneNode(true));
  }
}

// Color selections
function colorBlack() {
  container.addEventListener("mouseover", (event) => {
    event.target.classList.add("color-items");
    event.target.style.removeProperty("background-color");
  });
}

function eraser() {
  container.addEventListener("mouseover", (event) => {
    event.target.classList.remove("color-items");
    event.target.style.removeProperty("background-color");
    event.target.classList.add("cell-reset");
  });
}

function randColor() {
  container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();
  });
}
//  update grid size based on slider change.
slider.addEventListener("change", function (gridSize) {
  gridSize = slider.value;
  createGrid(gridSize);
});

// update on screen slider value.
slider.oninput = function () {
  output.innerHTML = this.value;
};

createGrid(gridSize);
