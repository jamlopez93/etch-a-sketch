const grid = document.querySelector(".grid");
const reset = document.querySelector("#reset");
const rainbow = document.querySelector("#rainbow");
const black = document.querySelector("#black");
const eraser = document.querySelector("#eraser");
const color = document.querySelector("#color");
const gridSizeValue = document.querySelector("#size");

document.getElementById("size").value = 64;

document.getElementById("size").addEventListener("input", function () {
  let max = parseInt(this.max);

  if (parseInt(this.value) > max) {
    this.value = max;
  }
});

addEventListener("mouseover", function (e) {
  if (e.target.className === "grid-item") {
    e.target.style.backgroundColor = "black";
  }
});

addEventListener("click", function (e) {
  if (e.target.id === "reset") {
    clearBlackFromGrid();
  }
});

addEventListener("click", function (e) {
  if (e.target.id === "rainbow") {
    addEventListener("mouseover", function (e) {
      if (e.target.className === "grid-item") {
        e.target.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )})`;
      }
    });
  }
});

addEventListener("click", function (e) {
  if (e.target.id === "black") {
    addEventListener("mouseover", function (e) {
      if (e.target.className === "grid-item") {
        e.target.style.backgroundColor = "black";
      }
    });
  }
});

addEventListener("click", function (e) {
  if (e.target.id === "eraser") {
    addEventListener("mouseover", function (e) {
      if (e.target.className === "grid-item") {
        e.target.style.backgroundColor = "white";
      }
    });
  }
});

addEventListener("click", function (e) {
  if (e.target.id === "color") {
    addEventListener("mouseover", function (e) {
      if (e.target.className === "grid-item") {
        e.target.style.backgroundColor = color.value;
      }
    });
  }
});

addEventListener("input", function (e) {
  if (
    e.target.id === "size" &&
    gridSizeValue.value > 0 &&
    gridSizeValue.value <= 100
  ) {
    clearGrid();
    createGrid(gridSizeValue.value);
  } else if (gridSizeValue.value > 100) {
    gridSizeValue.value = 100;
    clearGrid();
    createGrid(gridSizeValue.value);
  }
});

createGrid(64);
function createGrid(size) {
  for (c = 0; c < size * size; c++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "grid-item";
  }
  document.querySelector(
    ".grid"
  ).style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => gridItem.remove());
}

function clearBlackFromGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => (gridItem.style.backgroundColor = "white"));
}
