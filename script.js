// Define grid container
const container = document.querySelector(".container");

// Define slider elements
const slider = document.getElementById("range");
let output = document.getElementById("output-value");
output.innerHTML = slider.value;
// Define grid items
const cell = document.createElement("div");
cell.classList.add("cell");

// Variables for setting grid size
let gridSize = 16;
let numOfElements = gridSize * gridSize;

// update slider value
slider.oninput = function () {
  output.innerHTML = this.value;
};

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
