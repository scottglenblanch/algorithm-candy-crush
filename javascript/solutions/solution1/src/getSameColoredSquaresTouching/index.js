import { get } from 'lodash';
import { isCellValueExist, getCellValue } from '../matrixStore';

const getSameSquaresTouching = ({
  rowPos,
  colPos,
  color,
  alreadySeen = [],
  squaresWithSameColor = []
}) => {
  const key = `${rowPos}:${colPos}`;
  const isExists = isCellValueExist({rowPos, colPos});
  const isSameColor = color === getCellValue({rowPos, colPos});
  const isNeverSeenBefore = !alreadySeen.includes(key);
  const isValid = isExists && isSameColor && isNeverSeenBefore;

  if(isValid) {
    squaresWithSameColor.push(key);
    alreadySeen.push(key);

    for(let i = -1; i < 1; i++) {
      for(let j = -1; j < 1; j++) {
        squaresWithSameColor = squaresWithSameColor.concat({
          rowPos: rowPos + i,
          colPos: colPos + j,
          color,
          alreadySeen,
          squaresWithSameColor
        })
      }
    }
  }

  return squaresWithSameColor;
};


export default getSameSquaresTouching;