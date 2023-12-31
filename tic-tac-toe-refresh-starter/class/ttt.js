const Screen = require("./screen");
const Cursor = require("./cursor");


class TTT {

    constructor() {

        this.playerTurn = "O";

        this.grid = [[' ',' ',' '],
                     [' ',' ',' '],
                     [' ',' ',' ']]

        this.cursor = new Cursor(3, 3);

        // Initialize a 3x3 tic-tac-toe grid
        Screen.initialize(3, 3);
        Screen.setGridlines(true);

        // Replace this with real commands
        Screen.addCommand('left', 'Move to the left', this.cursor.left);
        Screen.addCommand('up', 'Move up', this.cursor.up);
        Screen.addCommand('down', 'Move down', this.cursor.down);
        Screen.addCommand('right', 'Move to the right', this.cursor.right);
        Screen.addCommand('return', 'Place your move', this.cursor.place);
        Screen.render();
    }

    static checkWin(grid) {
        const winnerX = 'XXX';
        const winnerO = 'OOO';
        const diagDown = grid[0][0].concat(grid[1][1], grid[2][2]);
        const diagUp = grid[2][0].concat(grid[1][1], grid[0][2]);
        const row1 = grid[0].join('');
        const row2 = grid[1].join('');
        const row3 = grid[2].join('');
        const col1 = grid[0][0].concat(grid[1][0], grid[2][0]);
        const col2 = grid[0][1].concat(grid[1][1], grid[2][1]);
        const col3 = grid[0][2].concat(grid[1][2], grid[2][2]);
        const tieCheck = grid[0].concat(grid[1], grid[2]);

        if (!(grid.join().includes('X')) && !(grid.join().includes('O'))) {
            return false;
        } else if (row1.includes(winnerX) || row2.includes(winnerX) ||
            row3.includes(winnerX) || col1.includes(winnerX) ||
            col2.includes(winnerX) || col3.includes(winnerX) ||
            diagDown.includes(winnerX) || diagUp.includes(winnerX)) {
            return 'X';
        } else if (row1.includes(winnerO) || row2.includes(winnerO) ||
            row3.includes(winnerO) || col1.includes(winnerO) ||
            col2.includes(winnerO) || col3.includes(winnerO) ||
            diagDown.includes(winnerO) || diagUp.includes(winnerO))  {
            return 'O';
        } else if (tieCheck.indexOf(' ') !== -1) {
            return false;
        }

        return 'T'
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

module.exports =  TTT ;
