const container = document.getElementById("container");

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
    container.appendChild(cell);
  };

};

function changeColor(e) {
  const randR = Math.floor(Math.random() *256);
  const randG = Math.floor(Math.random() *256);
  const randB = Math.floor(Math.random() *256);

  e.target.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`
}


