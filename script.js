// Define grid container
const container = document.querySelector(".container");
// Define grid items
const items = document.createElement("div");

items.classList.add("items");
items.innerText = "item";

// Variables for setting grid size
let gridSize = 16;
let numOfElements = gridSize * gridSize;

//Adds specified number of grid items to grid
function createGrid(numOfElements) {
  for (i = 0; i < numOfElements; i++) {
    container.appendChild(items.cloneNode(true));
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
