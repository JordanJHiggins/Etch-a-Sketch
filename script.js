// Define grid container
const container = document.querySelector(".container");

// Define grid items
const cell = document.createElement("div");
cell.classList.add("cell");

// Variables for setting grid size
let gridSize = 0;

//Adds specified number of grid items to grid
function createGrid(gridSize) {
  let gridDimension = gridSize * gridSize;
  for (i = 0; i < gridDimension; i++) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.insertAdjacentElement("beforeend", cell.cloneNode(true));
  }
}

createGrid(12);
// change cell color
function addListener() {
  container.addEventListener("mouseover", function handleEvent(event) {
    event.target.classList.add("color-items");
  });
}

function changeGridSize() {
  gridSize = window.prompt("choose a new grid size 1-100");
}
// changeGridButton.addEventListener("click", changeGrid);
addListener();

// Future Feature

/*  update grid size based on slider change.
 slider.addEventListener("change", function () {
 gridSize = slider.value;
setGridSize(this.value);
 });
*/

/* update on screen slider value.
slider.oninput = function () {
  output.innerHTML = this.value;
};
*/

// Define slider elements
// const slider = document.getElementById("myRange");
// const output = document.getElementById("output-value");
// output.innerHTML = slider.value;
