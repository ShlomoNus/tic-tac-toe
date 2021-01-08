export function calculateWinner(arr, options) {
  let isWinner = [];
    
  for (let index = 0; index < options.length; index++) {
    
    for (const innerIndex of options[index]) {
      isWinner.push(arr[innerIndex])
    }

    isWinner = [...new Set(isWinner)]

    if ( isWinner[0] && isWinner ) return isWinner[0]
  }
  return null;
}




export  function createOptions(width, length) {
  const gameLength = width * length;
  const lines = [];
  let newLine = [];
  let newlineLimit = width - 1;
  for (let index = 0; index < gameLength; index++) {
    if (index <= newlineLimit) {
      newLine.push(index);
      if (index == gameLength - 1) {
        lines.push(newLine);
        break;
      }
      continue;
    }
    lines.push(newLine);
    newLine = [];
    newLine.push(index);
    newlineLimit += width;
  }
  const rows = [];
  let newRow = [];
  for (let index = 0; index < lines[0].length; index++) {
    for (const line of lines) {
      newRow.push(line[index]);
    }
    rows.push(newRow);
    newRow = [];
  }
  const diagonals = [];
  let newDiagonal = [];
  //left to right diagonal
  for (let index = 0; index < lines.length; index++) {
    newDiagonal.push(lines[index][index]);
  }
  diagonals.push(newDiagonal);

  newDiagonal = [];

  //right to left diagonal
  let startPoint = lines[0].length - 1;
  for (let index = 0; index < lines.length; index++) {
    newDiagonal.push(lines[index][startPoint]);
    startPoint--;
  }
  diagonals.push(newDiagonal);
  const options = [...lines, ...rows, ...diagonals];
  console.log(options);
  return options;

}

