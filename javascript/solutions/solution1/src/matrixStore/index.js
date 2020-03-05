const rowCount = 10;
const colCount = 10;
const matrix = getInitialMatrix();


function getInitialMatrix () {
  const matrix = [];
  for(let i = 0; i < rowCount; i++) {
    const row = [];
    for(let j = 0; j < colCount; j++) {
      row[j] = getRandomCellValue();
    }
    matrix.push(row)
  }

  return matrix;
}

function getRandomCellValue () {
  const randomNum =  Math.floor(Math.random() * 10);

  if(randomNum > 6) {
    return 'red-cell';
  } else if (randomNum > 3) {
    return 'blue-cell';
  } else {
    return 'white-cell';
  }
}

export function getCellValue ({rowPos, colPos}) {
  return matrix[rowPos][colPos];
}
export function getRowCount() {
  return rowCount;
}
export function getColCount () {
  return colCount;
}
export function setCellValue ({ rowPos, colPos, val }) {
  matrix[rowPos][colPos] = val;
}
