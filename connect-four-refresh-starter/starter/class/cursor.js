const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  down = () => {
    this.resetBackgroundColor();

    if (0 <= this.row && this.row < this.numRows - 1) {
        this.row += 1;
    }

    this.setBackgroundColor();
    Screen.render();
  }

  up = () => {
    this.resetBackgroundColor();

    if (0 < this.row && this.row <= this.numRows -1) {
        this.row -= 1;
    }

    this.setBackgroundColor();
    Screen.render();
  }

  left = () => {
    this.resetBackgroundColor();

    if (0 < this.col && this.col <= this.numCols - 1) {
        this.col -= 1;
    }

    this.setBackgroundColor();
    Screen.render();
  }

  right = () => {
    this.resetBackgroundColor();
    if (0 <= this.col && this.col < this.numCols - 1) {
        this.col += 1;
    }
    this.setBackgroundColor();
    Screen.render();
  }

}


module.exports = Cursor;
