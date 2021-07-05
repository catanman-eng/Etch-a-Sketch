const grid = document.getElementById("grid")
const reset = document.getElementById("reset");
const colorPicker = document.getElementById("color-select")

window.addEventListener("load", defaultGrid);

function defaultGrid() {
  
  makeGrid(16, 16);
}


makeGrid = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.className = "cells";
    cell.addEventListener("mouseover", changeColor);
    grid.appendChild(cell);
  };

};


function userColorSelection(event) {
  color = event.target.value;
}



function changeColor(e) {
  const randR = Math.floor(Math.random() *256);
  const randG = Math.floor(Math.random() *256);
  const randB = Math.floor(Math.random() *256);

  e.target.style.backgroundColor = `rgb(${randR},${randG},${randB})`;
}

reset.addEventListener("click", resetGrid);

function resetGrid() {
  let allCells = document.querySelectorAll(".cells").forEach(cell => {
    cell.style.backgroundColor = "white";
  });

  let size = prompt("Please Select New Grid Size (Maximum: 100)", "50");

  while (grid.firstChild) grid.removeChild(grid.firstChild);

  makeGrid(`${size}`, `${size}`);

}
