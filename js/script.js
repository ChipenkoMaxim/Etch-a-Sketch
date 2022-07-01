let tableSize;

const createTableButton = document.querySelector('button');
createTableButton.addEventListener('click', () => {
  removeTable();
  tableSize = +prompt("Print x where x is amount rows and columns(x can't be more than 100 and can't be less than 1)");
  if (tableSize > 100) {
    tableSize = 100;
  }
  if (!Number.isInteger(tableSize) || tableSize <= 0) {
    return;
  }
  createTable();
});


function removeTable() {
  const body = document.querySelector('body');
  const table = document.querySelector('.table');
  if (table !== null) {
    body.removeChild(table);
  }
}

function createTable() {
  let table = document.createElement('div');
  table = fillTable(table);
  table = styleTable(table);
  addToDOM(table);
}

function styleTable(table) {
  table.classList.add('table');
  return table;
}


function fillTable(table) {
  for (let i = 0; i < tableSize; i++) {
    let row = createRow();
    table.appendChild(row);
  }
  return table;
}

function createRow() {
  let row = document.createElement('div');
  row = styleRow(row);
  row = fillRow(row);
  return row;
}

function styleRow(row) {
  row.classList.add('row');
  return row;
}

function fillRow(row) {
  for (let i = 0; i < tableSize; i++) {
    const cellNumber = i + 1;
    const cell = createRowCell(cellNumber);
    row.appendChild(cell);
  }
  return row;
}

function createRowCell(cellNumber) {
  let div = document.createElement('div');
  div = styleRowCell(div);
  div.addEventListener('mouseover', addRandomBackgroundColor, {
    once: true
  });
  div.addEventListener('mouseover', reduceBrightness);
  return div;
}

function styleRowCell(cell) {
  cell.classList.add('cell');
  return cell;
}

function addTextContent(cell, content) {
  cell.textContent = content;
  return cell;
}

function addRandomBackgroundColor(e) {
  const red = Math.floor((Math.random()*255));
  const green = Math.floor((Math.random()*255));
  const blue = Math.floor((Math.random()*255));
  e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
  e.target.style.filter = 'brightness(100%)';
}

function reduceBrightness(e) {
  const currentBrightness = +getBrightness(e);
  if (currentBrightness !== 0) {
    const newBrightness = currentBrightness - 10;
    e.target.style.filter = `brightness(${newBrightness}%)`;
  }
}

function getBrightness(e) {
  return e.target.style.filter.match(/[0-9]+/).pop();
}

function addToDOM(table) {
  const body = document.querySelector('body');
  body.appendChild(table);
}



