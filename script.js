// Define grid container
const container = document.querySelector(".container");

// Define grid items
const cell = document.createElement("div");
cell.classList.add("cell");

// Variables for setting grid size
let gridSize = window.prompt("Select a grid size 1-100:", 16);
let numOfElements = gridSize * gridSize;

// Set grid dimensions
function setGridSize() {
  container.setAttribute(
    "style",
    `grid-template: repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr )`
  );
}
//Adds specified number of grid items to grid
function createGrid(numOfElements) {
  for (i = 0; i < numOfElements; i++) {
    container.appendChild(cell.cloneNode(true));
  }
}

// change cell color
function addListener() {
  container.addEventListener("mouseover", function handleEvent(event) {
    event.target.classList.add("color-items");
  });
}

addListener();
setGridSize();
createGrid(numOfElements);

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
