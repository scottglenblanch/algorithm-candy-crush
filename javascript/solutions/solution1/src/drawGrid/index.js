import {getRowCount, getColCount, getCellValue} from "../matrixStore";

const getMatrixAsHtml = () => {
  let html = '<table>';

  for(let rowPos = 0; rowPos < getRowCount(); rowPos++) {
    html += '\n\t<tr>';
    for(let colPos = 0; colPos < getColCount(); colPos++) {
      const cellValue = getCellValue({rowPos, colPos});
      html += `\n\t\t<td class="${cellValue}"></td>`
    }

    html += '\n\t</tr>';
  }

  html += '\n</table>';

  return html;
};


export default () => {
  document.querySelector('.grid-ctn').innerHTML = getMatrixAsHtml();
}