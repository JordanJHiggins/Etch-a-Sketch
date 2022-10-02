// Define grid container
const container = document.querySelector(".container");
// Define grid items
const cell = document.createElement("div");
cell.classList.add("cell");

// Variables for setting grid size
let gridSize = 16;
let numOfElements = gridSize * gridSize;

//Adds specified number of grid items to grid
function createGrid(numOfElements) {
  for (i = 0; i < numOfElements; i++) {
    container.appendChild(cell.cloneNode(true));
  }
}

// Set grid dimensions
function setGridSize() {
  container.setAttribute(
    "style",
    `grid-template: repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr) `
  );
}

setGridSize();
createGrid(numOfElements);

// Adds eventlistener to container
function addListener() {
  container.addEventListener("mouseover", function handleEvent(event) {
    event.target.classList.add("color-items");
  });
}

addListener();
