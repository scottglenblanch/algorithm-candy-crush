import { get } from 'lodash';

const rowCount = 10;
const colCount = 10;
const matrix = getInitialMatrix();


function getInitialMatrix() {
  const matrix = [];
  for(let i = 0; i < rowCount; i++) {
    const row = [];
    for(let j = 0; j < colCount; j++) {
      row[j] = getRandomColorOption();
    }
    matrix.push(row)
  }

  return matrix;
}

function getRandomColorOption() {
  const colorList = ['red', 'blue', 'green'];
  const randomNum =  Math.floor(Math.random() * colorList.length);

  return colorList[randomNum];
}

export const isCellValueExist = ({rowPos, colPos}) =>
  matrix[rowPos] !== undefined && matrix[rowPos][colPos] !== undefined;


export function getCellValue ({rowPos, colPos}) {
  return get(matrix, [rowPos, colPos], null);
}
export function getRowCount() {
  return rowCount;
}
export function getColCount () {
  return colCount;
}
export function setCellValue ({ rowPos, colPos, val }) {
  if(isCellValueExist({rowPos, colPos})) {
    matrix[rowPos][colPos] = val;
  }
}
