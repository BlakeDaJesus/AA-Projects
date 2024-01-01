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

    up = () => {
        this.resetBackgroundColor();

        if (this.row <= 2 && this.row > 0) {
            this.row -= 1;
        }

        this.setBackgroundColor();
        Screen.render();
    }

    down = () => {
        this.resetBackgroundColor();

        if (this.row < 2 && this.row >= 0) {
            this.row += 1;
        }

        this.setBackgroundColor();
        Screen.render();
    }

    left = () => {
        this.resetBackgroundColor();

        if (this.col > 0 && this.col <= 2) {
            this.col -= 1;
        }

        this.setBackgroundColor();
        Screen.render();
    }

    right = () => {
        this.resetBackgroundColor();

        if (this.col >= 0 && this.col < 2) {
            this.col += 1;
        }

        this.setBackgroundColor();
        Screen.render();
    }

    place = () => {
        const row = this.cursor.row;
        const col = this.cursor.col;
        const gridBox = Screen.grid[row][col];

        if (this.playerTurn === 'X' && gridBox === ' ') {
            console.log(this.playerTurn)
            Screen.setGrid(row, col, 'X')
            this.cursor.cursorColor = 'blue';
            this.playerTurn = 'O'
            Screen.setBackgroundColor(row, col, this.cursor.cursorColor);
        } else if (this.playerTurn === 'O' && gridBox === ' ') {
            Screen.setGrid(this.row, this.col, this.playerTurn);
            this.cursorColor = 'yellow';
            this.playerTurn = 'X';
            Screen.setBackgroundColor(row, col, this.cursor.cursorColor);
        }

        Screen.render();
    }

}

module.exports = Cursor;
