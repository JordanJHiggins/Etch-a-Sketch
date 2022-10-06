// Define grid container
const container = document.querySelector(".container");

const eraserButton = document.querySelector(".eraser-button");
// Define slider elements
const slider = document.getElementById("myRange");
const output = document.getElementById("output-value");
output.innerHTML = slider.value;

// Define grid items
const cell = document.createElement("div");
cell.classList.add("cell");

// Variables for setting grid size
let gridSize = 16;

//Adds specified number of grid items to grid
function createGrid(gridSize) {
  let gridDimension = gridSize * gridSize;
  for (i = 0; i < gridDimension; i++) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.insertAdjacentElement("beforeend", cell.cloneNode(true));
  }
}
createGrid(gridSize);

// change cell color to black
function colorBlack() {
  container.addEventListener("mouseover", (event) => {
    event.target.classList.add("color-items");
  });
}

function eraser() {
  container.addEventListener("mouseover", (event) => {
    event.target.classList.remove("color-items");
  });
}

colorBlack();

//  update grid size based on slider change.
slider.addEventListener("change", function (gridSize) {
  gridSize = slider.value;
  createGrid(gridSize);
});

//  update on screen slider value.
slider.oninput = function () {
  output.innerHTML = this.value;
};
