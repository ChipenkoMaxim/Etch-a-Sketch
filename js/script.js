
createTable();

function createTable() {
  let table = document.createElement('div');
  table = fillTable(table);
  addToDOM(table);
}

function fillTable(table) {
  const rowCount = 16;
  for (let i = 0; i < rowCount; i++) {
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
  const rowSize = 16;
  for (let i = 0; i < rowSize; i++) {
    const cellNumber = i + 1;
    const cell = createRowCell(cellNumber);
    row.appendChild(cell);
  }
  return row;
}

function createRowCell(cellNumber) { 
  let div = document.createElement('div');
  div = styleRowCell(div);
  div = addTextContent(div, cellNumber);
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

function addToDOM(table) {
  const body = document.querySelector('body');
  body.appendChild(table);
}



