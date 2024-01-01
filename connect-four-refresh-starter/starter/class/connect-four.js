const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

    constructor() {

        this.playerTurn = "O";

        this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                     [' ',' ',' ',' ',' ',' ',' '],
                     [' ',' ',' ',' ',' ',' ',' '],
                     [' ',' ',' ',' ',' ',' ',' '],
                     [' ',' ',' ',' ',' ',' ',' '],
                     [' ',' ',' ',' ',' ',' ',' ']]

        this.cursor = new Cursor(6, 7);

        // Initialize a 6x7 connect-four grid
        Screen.initialize(6, 7);
        Screen.setGridlines(true);

        // Replace this with real commands
        Screen.addCommand('left', 'Move to the left', this.cursor.left);
        Screen.addCommand('right', 'Move to the right', this.cursor.right);
        Screen.addCommand('up', 'Move up to the top', this.cursor.up);
        Screen.addCommand('down', 'Move down to the ground', this.cursor.down)
        Screen.addCommand('return', 'Place your move', this.place);
        this.cursor.setBackgroundColor();
        Screen.render();
    }

    static checkWin(grid) {
        let winnerX = 'XXXX';
        let winnerO = 'OOOO';

        if (!(grid.join().includes('X')) && !(grid.join().includes('O'))) {
            return false;
        }
        for (let row = 0; row <= grid.length -1; row ++) {
            for (let col = 0; col <= grid.length; col++) {
                var currentBox = grid[row][col]
                const rowCheck = currentBox.concat(grid[row][col + 1], grid[row][col + 2], grid[row][col + 3]);

                if (rowCheck.includes(winnerX)) {
                    return 'X';
                } else if (rowCheck.includes(winnerO)) {
                    return 'O';
                }
                if (row < grid.length - 3) {
                    const colCheck = currentBox.concat(grid[row + 1][col], grid[row + 2][col], grid[row + 3][col]);
                    if (colCheck.includes(winnerX)) {
                        return 'X';
                    } else if (colCheck.includes(winnerO)) {
                        return 'O';
                    }
                }
                if (row > 2 && col < grid.length - 2) {
                    const diagUpCheck = currentBox.concat(grid[row - 1][col + 1], grid[row - 2][col + 2], grid[row -3][col + 3]);
                    if (diagUpCheck.includes(winnerX)) {
                        return 'X';
                    } else if (diagUpCheck.includes(winnerO)) {
                        return 'O';
                    }
                }  else if (col < grid.length - 2) {
                    const diagDownCheck = currentBox.concat(grid[row + 1][col + 1], grid[row + 2][col + 2], grid[row + 3][col + 3]);

                    if (diagDownCheck.includes(winnerX)) {
                        return 'X';
                    } else if (diagDownCheck.includes(winnerO)) {
                        return 'O';
                    }
                }
                if ((grid.join('').indexOf(' ') === -1)) {
                    return 'T';
                }
            }
        }
        return false;
    }

    place = () => {
        const row = this.cursor.row;
        const col = this.cursor.col;
        const gridBox = Screen.grid[row][col];


        if (this.playerTurn === "X" && gridBox === ' ') {
            Screen.setGrid(row, col, this.playerTurn)
            this.cursor.cursorColor = 'yellow';
            this.playerTurn = "O";
        } else if (this.playerTurn === "O" && gridBox === ' ') {
            this.cursor.cursorColor = 'blue';
            Screen.setGrid(row, col, this.playerTurn);
            this.playerTurn = "X"
        }

        if (ConnectFour.checkWin(Screen.grid)) {

            ConnectFour.endGame(ConnectFour.checkWin(Screen.grid));
        };
        Screen.render();
    }


    static endGame(winner) {
        if (winner === 'O' || winner === 'X') {
            Screen.setMessage(`Player ${winner} wins!`);
        } else if (winner === 'T') {
            Screen.setMessage(`Tie game!`);
        } else {
            Screen.setMessage(`Game Over`);
        }
        Screen.render();
        Screen.quit();
    }

}


module.exports = ConnectFour;
