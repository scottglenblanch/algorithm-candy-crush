import {range} from 'lodash';

const getGridCtn = () => document.querySelector('.grid-ctn');

const getCellValue = num => {
  if(num > 6) {
    return 'red-cell';
  } else if (num > 3) {
    return 'blue-cell';
  } else {
    return 'white-cell;'
  }
};

const getRandomNum = () => Math.floor(Math.random() * 10);

const getDefaultMatrix = ({ rowCount, colCount }) => {
  return range(0, rowCount).reduce((matrix) => {
    const row = range(0, colCount).reduce(row => {
      row.push(getCellValue(getRandomNum()));
      return row;
    }, []);

    matrix.push(row);

    return matrix;
  }, [])
};


const getCellHtml = (cellData, cellIter, arr) => {
  let cellHtml = '';
  if(cellIter === 0) {
    cellHtml += '<tr>';
  }

  cellHtml += `<td class="${cellData}"></td>`;

  if(cellIter === arr.length - 1) {
    cellHtml += '</tr>';
  }

  return cellHtml;
};

const getRowHtml = (rowData, rowIter, arr) => {
  let rowHtml = '';

  if(rowIter === 0) {
    rowHtml += '<table>';
  }

  rowHtml += rowData.reduce(rowReduceFn, '');

  if(rowIter === arr.length - 1) {
    rowHtml +='\n</table>';
  }

  return rowHtml;
};

const rowReduceFn = (rowHtml, cellData, cellIter, arr) =>
  rowHtml + getCellHtml(cellData, cellIter, arr);


const matrixReduceFn = (matrixHtml, rowData, rowIter, arr) =>
  matrixHtml + getRowHtml(rowData, rowIter, arr);


const convertMatrixToHtml = (matrix) => matrix.reduce(matrixReduceFn, '');


export default () => {
  const rowCount = 10;
  const colCount = 10;
  getGridCtn().innerHTML = convertMatrixToHtml(getDefaultMatrix({rowCount, colCount}));
}