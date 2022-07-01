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
  //const rowCount = 16;
  for (let i = 0; i < tableSize; i++) {
    let row = createRow();
    table.appendChild(row);
  }
  return table;
}

function createRow() {
  let row =  document.createElement('div');
  row = styleRow(row);
  row = fillRow(row);
  return row;
}

function styleRow(row) {
  row.classList.add('row');
  return row;
}

function fillRow(row) {
  //const rowSize = 16;
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
  //div = addTextContent(div, cellNumber);
  div.addEventListener('mouseover', addHover);
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

function addHover(e) {
  e.target.classList.add('hover-cell');
}


function addToDOM(table) {
  const body = document.querySelector('body');
  body.appendChild(table);
}



