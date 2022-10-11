const container = document.querySelector(".container");
const slider = document.getElementById("myRange");
const output = document.getElementById("output-value");
const cell = document.createElement("div");

output.innerHTML = `${slider.value} x ${slider.value}`;
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

function randomColor() {
  container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();
  });
}

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
  });
}

function clearBoard() {
  let gridDiv = container.querySelectorAll("div");

  gridDiv.forEach((gridDiv) => (gridDiv.style.backgroundColor = "beige"));
}

slider.addEventListener("change", function (gridSize) {
  gridSize = slider.value;
  createGrid(gridSize);
});

slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`;
};

createGrid(gridSize);
