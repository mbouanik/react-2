function unroll(squareArray) {
  const result = [];

  while (squareArray.length > 0) {
    // Move from left to right
    result.push(...squareArray.shift());

    // Move from top to bottom
    for (let i = 0; i < squareArray.length; i++) {
      if (squareArray[i].length > 0) {
        result.push(squareArray[i].pop());
      }
    }

    // Move from right to left
    if (squareArray.length > 0) {
      result.push(...squareArray.pop().reverse());
    }

    // Move from bottom to top
    for (let i = squareArray.length - 1; i >= 0; i--) {
      if (squareArray[i].length > 0) {
        result.push(squareArray[i].shift());
      }
    }
  }

  return result;
}
const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(unroll(square));
module.exports = unroll;
